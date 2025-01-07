import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./VanDetail.module.css";

const VanDetail = () => {
  const [van, setVan] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  return (
    <>
      {van ? (
        <div className={`${styles.van_detail_container}`}>
          <div className={`${styles.img_container}`}>
            <img
              className={`${styles.img}`}
              src={van.imageUrl}
              alt={van.name}
            />
          </div>
          <div className={`${styles.btn_container}`}>
            <button className={`${styles.btn} ${van.type} `}>{van.type}</button>
          </div>
          <div className={`${styles.van_info}`}>
            <h1>{van.name}</h1>
            <p>
              <span className={`${styles.van_price}`}>${van.price}</span>
              <span className={`${styles.text}`}>/day</span>
            </p>
            <p>{van.description}</p>
            <button className={`${styles.rent_btn}`}>Rent this van</button>
          </div>
        </div>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "40vh" }}>Loading...</h2>
      )}
    </>
  );
};
export default VanDetail;
