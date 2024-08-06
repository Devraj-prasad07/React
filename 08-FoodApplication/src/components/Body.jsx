import React from "react";
import RestroCard from "./RestroCard";
import ShimmerUi from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBodyData from "../utils/useBodyData";
import useRestaurantFilters from "../utils/useRestaurantFilters";

const Body = () => {
  const BodyData = useBodyData();
  const {
    filteredList,
    isFiltered,
    searchText,
    handleFilter,
    clearFilters,
    handleSearch,
    handleSearchChange,
  } = useRestaurantFilters(BodyData);

  const status = useOnlineStatus();
  if (status === false)
    return (
      <h1>
        It seems that you have not connected to the internet. Please connect it
        or try again later.
      </h1>
    );

  return BodyData.length === 0 ? (
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
        {(isFiltered ? filteredList : BodyData).map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestroCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
