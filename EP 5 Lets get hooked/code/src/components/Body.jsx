import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="filters">
        <input
          type="button"
          className="top-rated-btn"
          value="Top Rated"
          onClick={() => {
            console.log("btn clicked");
          }}
        />
      </div>

      <div className="restaurant-container">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              restaurantData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
