import React from "react";
import styles from "../styles/Home.module.css";
import Skeleton from "react-loading-skeleton";

export default function Card({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageHolder}>
        {product.main_image ? (
          <img src={product.main_image} alt="product_picture" loading="lazy" />
        ) : (
          <Skeleton />
        )}
      </div>
      <div className={styles.minCardWrapper}>
        {/* {product.variants.map((e) => */}
        {product?.variants[0]?.images?.slice(0, 4).map((image, i) => (
          <div key={i} className={styles.minCard}>
            <img src={image} alt="product_picture" loading="lazy" />
          </div>
        ))}
        {/* )} */}
      </div>
      <div className={styles.descriptions}>
        <div>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.descriptionText}>{product.category_id}</p>
        </div>
      </div>
    </div>
  );
}
