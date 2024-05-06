import React, { useState, useEffect } from "react";
import RestroCard from "./RestroCard";

const Body = () => {
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=22.260423&lng=84.8535844");
      const json = await data.json();
      console.log(json);
      setFilterList(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const dataList = filterList.filter((restaurant) => parseFloat(restaurant.info.avgRating) > 4);
            setFilterList(dataList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="restro-container">
        {filterList.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
