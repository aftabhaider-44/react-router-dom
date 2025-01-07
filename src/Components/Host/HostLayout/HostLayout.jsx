import { Outlet, NavLink } from "react-router-dom";
import styles from "./HostLayout.module.css";

const HostLayout = () => {
  const getClassName = (obj) =>
    obj.isActive ? styles.current_link : styles.link;

  return (
    <>
      <nav className={`${styles.navBar}`}>
        <NavLink to="." end className={getClassName}>
          {/*  end Prop:
             => Ensures the NavLink to /host is active only when the current path is exactly /host.
             => Without end, the NavLink matches /host and any nested paths like /host/income or /host/reviews.
      */}
          Dashboard
        </NavLink>
        <NavLink to="income" className={getClassName}>
          Income
        </NavLink>
        <NavLink to="Vans" className={getClassName}>
          Vans
        </NavLink>
        <NavLink to="reviews" className={getClassName}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
