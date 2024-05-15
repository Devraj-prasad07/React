import React, { useState, useEffect } from "react";
import RestroCard from "./RestroCard";
import ShimmerUi from "./ShimmerUI";

const Body = () => {
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=22.260423&lng=84.8535844"
      );
      const json = await data.json();
      setFilterList(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return filterList.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <div className="inputContainer">
            <input type="text" className="search-box" placeholder=" Search" value={searchText} onChange={(e) => {
              setSearchText(e.target.value);
            }}/>
          </div>
          <button className="search-btn" onClick={() => {
            console.log(searchText);
            
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const dataList = filterList.filter(
              (restaurant) => parseFloat(restaurant?.info?.avgRating) > 4
            );
            setFilterList(dataList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="restro-container">
        {filterList.map((restaurant) => (
          <RestroCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
