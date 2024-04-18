import Product from "./Product";

export default function MyProductTab() {
  let styles = {
    display: "flex",
    justifyContent : "center",
    alignItems: "center",
    
  };
  return (
    <div style = {styles}>
      
      <Product Title="Logitech MX Master" idx={0} />
      <Product Title="Fire-Boltt Smart Watch" idx={1} />
      <Product Title="ASUS ROG Strix G16 (2023)" idx={2} />
      <Product Title="realme narzo 60 5G " idx={3} />
    </div>
  );
}
