import Item from "./Item";

export default  function ItemTab(){
    let styles = {
        display:"flex",
        justifyContent : "center",
        alignItems : "center"
    }
    return(
        <div style={styles}>
        <Item title = "Logitech MX Master" idx= {0}/>
        <Item title = "Fire-Boltt Smart Watch" idx= {1}/>
        <Item title = "ASUS ROG Strix G16" idx= {2}/>
        <Item title = "realme narzo 60 5G" idx= {3}/>
        </div>
    )
}