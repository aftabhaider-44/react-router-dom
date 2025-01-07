import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Vans.css";

function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title">Explore our van options</h1>
        <div className="vans__container">
          {vans.map((van) => (
            <div key={van.id} className="van_tile">
              <Link className="link" to={`${van.id}`}>
                <img className={`img`} src={van.imageUrl} />
                <div className="van_info">
                  <h2>{van.name}</h2>
                  <p>${van.price}/day</p>
                </div>
                <button className={`btn_type ${van.type}`}>{van.type}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Vans;
