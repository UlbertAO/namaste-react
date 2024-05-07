import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { name, avgRatingString, cuisines, costForTwo, cloudinaryImageId } =
    restaurantData.info;
  return (
    <div className="restaurant-card">
      <img src={CDN_URL + cloudinaryImageId} alt="IMG ERR" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString} stars</h4>
    </div>
  );
};

export default RestaurantCard;
