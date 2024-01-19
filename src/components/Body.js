import RestaurantCard from "./RestuarantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
	// Local state Variable
	const [listOfRestaurants, setListOfRestaurants] = useState(resList);
	return (
		<div className="body">
			<div className="search">
				<input placeholder="Serach food" />
				<button>Serach</button>
			</div>
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						const filteredList = listOfRestaurants.filter(
							(res) => res.info.avgRating > 4
						);
						setListOfRestaurants(filteredList);
					}}>
					Top Rated Restuarant
				</button>
			</div>
			<div className="res-conatiner">
				{listOfRestaurants.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
