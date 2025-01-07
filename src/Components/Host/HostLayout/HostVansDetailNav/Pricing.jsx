import { useOutletContext } from "react-router-dom";
const Pricing = () => {
  const van = useOutletContext();
  console.log(van);

  if (!van)
    return <h3 style={{ textAlign: "center", paddingTop: "80px" }}>Loading</h3>;

  return (
    <>
      <div style={{ width: "91%", margin: "2.5rem auto" }}>
        <p style={{ color: "#4D4D4D" }}>
          <span
            style={{ color: "#161616", fontSize: "1.5rem", fontWeight: "500" }}>
            ${van.price}
          </span>
          /day
        </p>
      </div>
    </>
  );
};

export default Pricing;
