import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HostVans.module.css";
const HostVans = () => {
  const [vans, setVans] = useState(null);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <>
      {vans ? (
        <div className={`${styles.HostVans_container}`}>
          <div className={`${styles.title_container}`}>
            <h1>Your listed vans</h1>
          </div>
          <div className={`${styles.vans_list}`}>
            {vans.map((van) => (
              <Link
                to={`${van.id}`}
                key={van.id}
                className={`${styles.link}`}>
                <div className={`${styles.van}`}>
                  <div className={`${styles.image}`}>
                    <img className={`${styles.img}`} src={van.imageUrl} />
                  </div>
                  <div className={`${styles.van_info}`}>
                    <h2>{van.name}</h2>
                    <p>${van.price}/day</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "30vh" }}>Loading...</h2>
      )}

    </>
  );
};

export default HostVans;
