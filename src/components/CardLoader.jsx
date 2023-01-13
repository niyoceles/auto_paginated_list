import React from "react";
import styles from "../styles/Home.module.css";
import Skeleton from "react-loading-skeleton";

export default function CardLoader() {
  return (
    <div className={styles.card}>
      <div className={styles.imageHolder}>
        <Skeleton height={200} />
      </div>
      <div className={styles.minCardWrapper}>
        {[...new Array(4)].map((e, i) => (
          <div key={i} className={styles.minCard}>
            <Skeleton height={50} />
          </div>
        ))}
      </div>
      <div className={styles.descriptions}>
        <div>
          {/* <div className={styles.name}> */}
          <Skeleton count={2} />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
