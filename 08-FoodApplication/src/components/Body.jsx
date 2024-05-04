import React, { useState } from "react";
import RestroCard from "./RestroCard";
import resList from "../utils/mockData";

const Body = () => {
  const [filterList, setFilterList] = useState(resList
  //   [
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: "121603",
  //       name: "Kannur Food Point",
  //       area: "Tavarekere",
  //       cloudinaryImageId:
  //         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       cuisines: ["Kerala", "Chinese"],
  //       costForTwo: 30000,
  //       deliveryTime: 24,
  //       avgRating: "4.5",
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: "121609",
  //       name: "MCD",
  //       area: "Tavarekere",
  //       cloudinaryImageId:
  //         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       cuisines: ["Kerala", "Chinese"],
  //       costForTwo: 30000,
  //       deliveryTime: 24,
  //       avgRating: "3.9",
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: "121605",
  //       name: "Baba ka Dhaba",
  //       area: "Tavarekere",
  //       cloudinaryImageId:
  //         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       cuisines: ["Kerala", "Chinese"],
  //       costForTwo: 30000,
  //       deliveryTime: 24,
  //       avgRating: "4.9",
  //     },
  //   },
  // ]
);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const dataList = filterList.filter((res) => parseFloat(res.data.avgRating) > 4);
            setFilterList(dataList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="restro-container">
        {filterList.map((restaurant) => (
          <RestroCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
