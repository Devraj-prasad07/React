import "./Product.css";
import Price from "./Price";

export default function Product(props) {
  const { Title, idx } = props;
  let OldPrices = ["12,495", "11,900", "1,599", "599"];
  let NewPrices = ["8,999", "9,199", "899", "278"];
  let Description = [
    ["8,000 DPI","intutive surface"],
    ["intutive surface","8,000 DPI"],
    ["designed for ipad pro","intutive surface"],
    ["wireless","Seamless"],
  ];
  return (
    <div className="Product">
      <h4>{Title}</h4>
      <p>{Description[idx][0]}</p>
      <p>{Description[idx][1]}</p>
      <Price OldPrice={OldPrices[idx]} NewPrice={NewPrices[idx]} />
    </div>
  );
}
