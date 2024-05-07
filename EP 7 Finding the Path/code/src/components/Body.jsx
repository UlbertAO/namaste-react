import RestaurantCard from "./RestaurantCard";
// import restaurants from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // const [restaurantList, setRestaurantList] = useState(restaurants);
  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantListData, setRrestaurantListData] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // invoked onl
    console.log("useeffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetchData called");

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const rastData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRrestaurantListData(rastData);
    setRestaurantList(rastData);
  };

  // conditional rendering
  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            setRestaurantList(
              restaurantListData.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchValue.toLowerCase())
              )
            );
          }}
        >
          Submit
        </button>
      </div>
      <div className="filters">
        <input
          type="button"
          className="top-rated-btn"
          value="Top Rated"
          onClick={() => {
            console.log("btn clicked");
            setRestaurantList(
              restaurantListData.filter(
                (rest) => rest.info.avgRatingString < "4"
              )
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
