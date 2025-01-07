import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./HostVansDetail.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HostVansDetail = () => {
  const { id } = useParams();
  const [van, setVan] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, [id]);

  function getClassName({ isActive }) {
    return isActive ? styles.current_link : styles.link;
  }

  return (
    <>
      {van ? (
        <div style={{ width: "100%", height: "100%" }}>
          <div
            onClick={() => navigate("../Vans")}
            className={`${styles.back_container}`}>
            <i className={`fas fa-angle-left ${styles.color}`}></i>
            <button
              className={`${styles.color}`}
              style={{ textDecoration: "underLine", border: "none" }}>
              Back to all vans
            </button>
          </div>
          <div className={`${styles.layout_container}`}>
            <div style={{ width: "150px" }}>
              <img
                style={{ width: "100%" }}
                src={van.imageUrl}
                alt={`image of ${van.name}`}
              />
            </div>
            <div className={`${styles.van_info}`}>
              <button
                className={`btn_type ${van.type}`}
                style={{ fontSize: "1rem", fontWeight: "400" }}>
                {van.type}
              </button>
              <h2 style={{ marginTop: "1rem" }}>{van.name}</h2>
              <p style={{ marginTop: "0.5rem" }}>
                <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                  ${van.price}
                </span>
                /day
              </p>
            </div>
          </div>
          <nav className={`${styles.navBar}`}>
            <NavLink end to="." className={getClassName}>
              Detail
            </NavLink>
            <NavLink to="pricing" className={getClassName}>
              Pricing
            </NavLink>
            <NavLink to="photos" className={getClassName}>
              Photos
            </NavLink>
          </nav>
          <Outlet context={van} />
        </div>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "30vh" }}>Loading...</h2>
      )}
    </>
  );
};

export default HostVansDetail;
