export default function Price(props) {
    const {OldPrice,NewPrice} = props;
    let OldPriceStyle = {
        textDecorationLine : "line-through",
    };

    let NewPriceStyle = {
     fontWeight : "bold"
    };

    let AllPriceBgc = {
        backgroundColor : "#e0c367",
        height: "30px",
        marginTop: "17px",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px"
    };


  return (
    <div style = {AllPriceBgc}>
        <span style = {OldPriceStyle}> {OldPrice} </span>
        &nbsp;
        <span style = {NewPriceStyle}> {NewPrice} </span>
    </div>
  );
}
