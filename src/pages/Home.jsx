import { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Header from "../components/Header";
import { useInView } from "react-intersection-observer";
import CardLoader from "../components/CardLoader";

export default function Home() {
  const { ref, inView } = useInView();
  const [limit, setLimit] = useState(12);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        "https://neutrogena-1.themissionboy.repl.co/products",
        {
          withCredentials: false,
          params: {
            offset: 0,
            limit: limit,
          },
        }
      );
      return res.data;
    },
  });

  useEffect(() => {
    if (inView) {
      if (limit !== data?.total_count) {
        setLimit((state) => state + 4);
        refetch();
      }
    }
  }, [inView]);

  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.mainWrapper}>
          {data?.results?.map((product, i) => (
            <Card product={product} key={i} />
          ))}
          {isLoading && [...new Array(4)].map((e, i) => <CardLoader key={i} />)}
        </div>
        {limit !== data?.total_count && (
          <div ref={ref}> Loading more pages ...</div>
        )}
        <Footer />
      </main>
    </>
  );
}
