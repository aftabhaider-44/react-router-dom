import "./Home.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflowY =
      location.pathname == "/about" ? "scroll" : "hidden";
      return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [location.pathname]);

  return (
    <>
      <div className="home__container">
        <h1 className="content__heading">
          You got the travel plans, we got the travel vans.
        </h1>
        <div className="content">
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <div className="btn__container">
            <Link className="btn" to="/">
              Find your van
            </Link>
          </div>
          <div className="footer">
            <p>Ⓒ 2022 #VANLIFE</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
