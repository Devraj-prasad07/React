import React from "react";
import ShimmerUi from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantsCard = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);

  if (!resInfo) {
    return <ShimmerUi />;
  }

  const cardInfo = resInfo.cards?.[2]?.card?.card?.info || {};
  const menuInfo =
    resInfo.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const MENU1 = menuInfo?.[2]?.card?.card?.itemCards || [];
  const MENU2 = menuInfo?.[3]?.card?.card?.itemCards || [];
  const MENU3 = menuInfo?.[4]?.card?.card?.itemCards || [];
  const MENU4 = menuInfo?.[5]?.card?.card?.itemCards || [];
  const MENU5 = menuInfo?.[6]?.card?.card?.itemCards || [];
  const MENU6 = menuInfo?.[7]?.card?.card?.itemCards || [];
  const MENU7 = menuInfo?.[8]?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h2>{cardInfo?.name || "Name not available"}</h2>
      <h4>
        {cardInfo?.avgRating || "No rating"} (
        {cardInfo?.totalRatingsString || "No ratings"}) &#9679;{" "}
        {cardInfo?.costForTwoMessage || "Cost information not available"}
      </h4>
      <ul>
        {cardInfo?.cuisines?.map((cuisine, index, array) => (
          <React.Fragment key={index}>
            <b
              style={{
                color: "#FF5200",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {cuisine}
            </b>
            {index < array.length - 1 && (
              <span style={{ color: "#FF5200" }}>, </span>
            )}
          </React.Fragment>
        ))}
      </ul>
      <ul>
        Outlet &nbsp; {cardInfo?.areaName || "Area information not available"}
      </ul>
      <ul>{cardInfo?.sla?.slaString || "SLA information not available"}</ul>
      <p>{cardInfo?.feeDetails?.message || "Fee details not available"}</p>

      {/* MENU 1 STARTS HERE */}
      <div className="Menu_1">
        <h1>
          {menuInfo?.[2]?.card?.card?.title}({MENU1.length})
        </h1>
        <div className="Menu_1_info">
          <ul>
            {MENU1.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name || "Item name not available"} for{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* MENU 1 ENDS HERE */}

      {/* MENU 2 STARTS HERE */}
      <div className="Menu_2">
        <h1>
          {menuInfo?.[3]?.card?.card?.title} ({MENU2?.length})
        </h1>
        <div className="Menu_2_info">
          <ul>
            {MENU2.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name || "Item name not available"} for{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* MENU 2 ENDS HERE */}

      {/* MENU 3 STARTS HERE  */}
      <div className="Menu_3">
        <h1>
          {menuInfo?.[4]?.card?.card?.title} ({MENU3?.length})
        </h1>
        <div className="Menu_3_info">
          <ul>
            {MENU3.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name || "Item name not available"} for{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* MENU 3 ENDS HERE */}

      {/* MENU 4 STARTS HERE  */}
      <div className="Menu_4">
        <h1>
          {menuInfo?.[5]?.card?.card?.title} ({MENU4?.length})
        </h1>
        <div className="Menu_4_info">
          <ul>
            {MENU4.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name || "Item name not available"} for{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*  MENU 4 ENDS HERE */}

      {/* MENU 5 STARTS HERE  */}
      <div className="Menu_5">
        <h1>
          {menuInfo?.[5]?.card?.card?.title} ({MENU5?.length})
        </h1>
        <div className="Menu_5_info">
          <ul>
            {MENU5.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name || "Item name not available"} for{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*  MENU 5 ENDS HERE */}

      {/* MENU 6 STARTS HERE  */}
      <div className="Menu_6">
        <h1>
          {" "}
          {menuInfo?.[5]?.card?.card?.title} ({MENU6?.length})
        </h1>
        <div className="Menu_6_info">
          <ul>
            {MENU4.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name || "Item name not available"} for{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*  MENU 6 ENDS HERE */}

      {/* MENU 7 STARTS HERE  */}
      <div className="Menu_7">
        <h1>
          {" "}
          {menuInfo?.[5]?.card?.card?.title} ({MENU7?.length})
        </h1>
        <div className="Menu_7_info">
          <ul>
            {MENU4.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name || "Item name not available"} for{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*  MENU 7 ENDS HERE */}
      
    </div>
  );
};

export default RestaurantsCard;
