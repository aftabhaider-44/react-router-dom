import { useOutletContext } from "react-router-dom";

const Photos = () => {

  const { van } = useOutletContext();
  

  if (!van)
    return <h3 style={{ textAlign: "center", paddingTop: "80px" }}>Loading</h3>;

  return (
    <>
      <div
        style={{
          width: "91%",
          margin: "2.5rem auto",
        }}>
        <div style={{ maxWidth: "150px"}}><img width="100%" src={van.imageUrl} /></div>
      </div>
    </>
  );
};

export default Photos;
