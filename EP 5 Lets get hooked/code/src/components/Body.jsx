import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restaurants);
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
            setRestaurantList(
              restaurantList.filter((rest) => rest.info.avgRatingString < "4")
            );
          }}
        />
      </div>

      <div className="restaurant-container">
        {restaurantList.map((restaurant) => {
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
