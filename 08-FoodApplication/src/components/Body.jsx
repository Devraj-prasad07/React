import React, { useState, useEffect } from "react";
import RestroCard from "./RestroCard";
import ShimmerUi from "./ShimmerUI";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const response = await fetch(
       "https://www.swiggy.com/mapi/homepage/getCards?lat=22.260423&lng=84.8535844",
      );
      const json = await response.json();
      const restaurants = json?.data?.success?.cards.flatMap(card => 
        card?.gridWidget?.gridElements?.infoWithStyle?.restaurants || []
      );
      const uniqueRestaurants = Array.from(new Set(restaurants.map(restaurant => restaurant?.info?.id)))
        .map(id => restaurants.find(restaurant => restaurant?.info?.id === id));
  
      setListOfRestro(uniqueRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const handleFilter = () => {
    const dataList = listOfRestro.filter(
      (restaurant) => parseFloat(restaurant?.info?.avgRating) < 4
    );
    setFilteredList(dataList);
    setIsFiltered(true);
  };

  const handleSearch = () => {
    const filteredRestro = listOfRestro.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(filteredRestro);
    setIsFiltered(true);
  };

  const clearFilters = () => {
    setFilteredList([]);
    setIsFiltered(false); 
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      clearFilters();
    }
  };

  return listOfRestro.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="subNavBar">
        {/* Search Button */}
        <div className="search">
          <div className="inputContainer">
            <input
              type="text"
              className="search-box"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        {/* Filter Button */}
        <div className="filter">
          <button className="filter-btn" onClick={handleFilter}>
            Filter
          </button>
          <button className="clear-btn" onClick={clearFilters}>
            Clear Filter
          </button>
        </div>
      </div>
      <div className="restro-container">
        {(isFiltered ? filteredList : listOfRestro).map((restaurant) => (
          <RestroCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
