import { useOutletContext } from "react-router-dom";

const Detail = () => {
  const { van } = useOutletContext();

  if (!van)
    return <h3 style={{ textAlign: "center", paddingTop: "80px" }}>Loading</h3>;

  return (
    <>
      <div
        style={{
          width: "91%",
          margin: "1.5rem auto",
          display: "flex",
          flexDirection: "column",
          gap: "0.7rem",
        }}>
        <p>
          <span style={{ fontWeight: "700", marginTop: "1.5rem" }}>Name: </span>
          {van.name}
        </p>
        <p>
          <span style={{ fontWeight: "700", marginTop: "1.5rem" }}>
            Category:{" "}
          </span>
          {van.type}
        </p>
        <p>
          <span style={{ fontWeight: "700", marginTop: "1.5rem" }}>
            Despcription:{" "}
          </span>
          {van.description}
        </p>
        <p>
          <span style={{ fontWeight: "700", marginTop: "1.5rem" }}>
            Visibility:{" "}
          </span>
          Public
        </p>
      </div>
    </>
  );
};

export default Detail;
