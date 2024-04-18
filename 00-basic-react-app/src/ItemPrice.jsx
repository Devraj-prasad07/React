export default function ItemPrice(props) {
  const { OldPrice, NewPrice } = props;

  let OldPriceStyle = {
    textDecorationLine: "line-through",
  };

  let NewPriceStyle = {
    fontWeight: "bold",
  };

  let priceTagBgc = {
    backgroundColor: "#e0c367",
    height: "30px",
    marginTop: "79px",
    borderBottomLeftRadius: "13px",
    borderBottomRightRadius: "13px",
  };

  return (
    <div style={priceTagBgc}>
      <span style={OldPriceStyle}>&#8377; {OldPrice}</span>
      &nbsp; &nbsp;
      <span style={NewPriceStyle}>&#8377; {NewPrice}</span>
    </div>
  );
}
