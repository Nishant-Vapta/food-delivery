import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
   return(
      <div className="header">
         <div className="logo-container">
            <img className="logo"
               src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png"
            />
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   );
};

const RestaurantCard = (props) => {
   const { resData } = props;

   const {cloudinaryImageId, 
      name,
      cuisines,  
      avgRating, costForTwo,
   } = resData?.info;

   const { deliveryTime } = resData?.info.sla;
   return(
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
         <img
            className="res-logo"
            alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
         />
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating} stars</h4>
         <h4>{costForTwo}</h4>
         <h4>{deliveryTime} mins</h4>
      </div>
   );
}

const resList = [
   {
      "info": {
         "id": "535525",
         "name": "The Punjabi Grill",
         "cloudinaryImageId": "dva8mitdhllor7ko0fwz",
         "locality": "Vikas Nagar",
         "areaName": "Neemuch",
         "costForTwo": "₹199 for two",
         "cuisines": [
         "Chinese"
         ],
         "avgRating": 4.3,
         "parentId": "212850",
         "avgRatingString": "4.3",
         "totalRatingsString": "20+",
         "sla": {
         "deliveryTime": 25,
         "lastMileTravel": 0.2,
         "serviceability": "SERVICEABLE",
         "slaString": "25 mins",
         "lastMileTravelString": "0.2 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 22:45:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/the-punjabi-grill-vikas-nagar-neemuch-neemuch-535525",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "223725",
         "name": "Jaini Food",
         "cloudinaryImageId": "w9aiwfgpqxxzzpk4a3qa",
         "locality": "LIC Road",
         "areaName": "Neemuch",
         "costForTwo": "₹200 for two",
         "cuisines": [
         "Pizzas",
         "Snacks",
         "Italian"
         ],
         "avgRating": 4.3,
         "veg": true,
         "parentId": "109043",
         "avgRatingString": "4.3",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 19,
         "lastMileTravel": 1.1,
         "serviceability": "SERVICEABLE",
         "slaString": "19 mins",
         "lastMileTravelString": "1.1 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:00:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "v1695133679/badges/Pure_Veg111.png",
               "description": "pureveg"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "pureveg",
                     "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/jaini-food-lic-road-neemuch-neemuch-223725",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "711749",
         "name": "Utsav Foods",
         "cloudinaryImageId": "08084c5e7590cce9bc00e13ad9fa5a3d",
         "locality": "Lic Colony Road",
         "areaName": "Neemuch",
         "costForTwo": "₹199 for two",
         "cuisines": [
         "Pizzas",
         "Pastas"
         ],
         "avgRating": 4.2,
         "veg": true,
         "parentId": "220415",
         "avgRatingString": "4.2",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 24,
         "lastMileTravel": 1.1,
         "serviceability": "SERVICEABLE",
         "slaString": "24 mins",
         "lastMileTravelString": "1.1 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/utsav-foods-lic-colony-road-neemuch-neemuch-711749",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "573396",
         "name": "Hungry Hope",
         "cloudinaryImageId": "ezjbwzfekqps5ezc2qf5",
         "locality": "Nagar Palika Road",
         "areaName": "Neemuch Locality",
         "costForTwo": "₹199 for two",
         "cuisines": [
         "Chinese",
         "Snacks",
         "Street Food",
         "Italian",
         "Fast Food",
         "Beverages"
         ],
         "avgRating": 3.9,
         "veg": true,
         "parentId": "104720",
         "avgRatingString": "3.9",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 28,
         "lastMileTravel": 1.5,
         "serviceability": "SERVICEABLE",
         "slaString": "28 mins",
         "lastMileTravelString": "1.5 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:30:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/hungry-hope-nagar-palika-road-neemuch-locality-neemuch-573396",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "230849",
         "name": "Chick N Place",
         "cloudinaryImageId": "kam1erl1nixfswyztkgk",
         "locality": "CRPF road",
         "areaName": "Neemuch Chawni",
         "costForTwo": "₹250 for two",
         "cuisines": [
         "North Indian",
         "Snacks"
         ],
         "avgRating": 4.4,
         "parentId": "60382",
         "avgRatingString": "4.4",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 24,
         "lastMileTravel": 1.6,
         "serviceability": "SERVICEABLE",
         "slaString": "24 mins",
         "lastMileTravelString": "1.6 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 22:30:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/chick-n-place-crpf-road-neemuch-chawni-neemuch-230849",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "232828",
         "name": "Chicken World Cafe",
         "cloudinaryImageId": "b31rdhyfza729xwhj4ki",
         "locality": "TIT Colony",
         "areaName": "Neemuch Locality",
         "costForTwo": "₹200 for two",
         "cuisines": [
         "Mughlai",
         "North Indian"
         ],
         "avgRating": 4,
         "parentId": "60776",
         "avgRatingString": "4.0",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 27,
         "lastMileTravel": 1,
         "serviceability": "SERVICEABLE",
         "slaString": "27 mins",
         "lastMileTravelString": "1.0 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 22:30:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/chicken-world-cafe-tit-colony-neemuch-locality-neemuch-232828",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "603684",
         "name": "Chicken Comes First",
         "cloudinaryImageId": "dua5dvvsvgunrdrfmxbr",
         "locality": "TIT Colony",
         "areaName": "Neemuch",
         "costForTwo": "₹199 for two",
         "cuisines": [
         "North Indian",
         "Biryani"
         ],
         "avgRating": 4.3,
         "parentId": "456258",
         "avgRatingString": "4.3",
         "totalRatingsString": "50+",
         "sla": {
         "deliveryTime": 35,
         "lastMileTravel": 1.2,
         "serviceability": "SERVICEABLE",
         "slaString": "35 mins",
         "lastMileTravelString": "1.2 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:01:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/chicken-comes-first-tit-colony-neemuch-neemuch-603684",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "554049",
         "name": "Cafe 24 Seven",
         "cloudinaryImageId": "oucizw1nizdtgiilcz5a",
         "locality": "Indira Nagar \n",
         "areaName": "Neemuch Chawni\n",
         "costForTwo": "₹199 for two",
         "cuisines": [
         "Snacks"
         ],
         "avgRating": 4.3,
         "veg": true,
         "parentId": "333253",
         "avgRatingString": "4.3",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 36,
         "lastMileTravel": 2,
         "serviceability": "SERVICEABLE",
         "slaString": "36 mins",
         "lastMileTravelString": "2.0 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:59:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "v1695133679/badges/Pure_Veg111.png",
               "description": "pureveg"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "pureveg",
                     "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/cafe-24-seven-indira-nagar-neemuch-chawni-neemuch-554049",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "196494",
         "name": "Hi-fi Foods",
         "cloudinaryImageId": "rjirwcrgeivxau8kh7v1",
         "locality": "Neemuch",
         "areaName": "Neemuch Chawni",
         "costForTwo": "₹200 for two",
         "cuisines": [
         "North Indian",
         "Chinese",
         "Beverages",
         "Desserts",
         "Snacks"
         ],
         "avgRating": 4.1,
         "veg": true,
         "parentId": "95718",
         "avgRatingString": "4.1",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 22,
         "lastMileTravel": 1.6,
         "serviceability": "SERVICEABLE",
         "slaString": "22 mins",
         "lastMileTravelString": "1.6 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/hi-fi-foods-neemuch-chawni-neemuch-196494",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "196485",
         "name": "Punjabi Tadka",
         "cloudinaryImageId": "k80o9e1bltsfk7cw2tw0",
         "locality": "Neemuch City Road \n",
         "areaName": "Jawahar Nagar",
         "costForTwo": "₹250 for two",
         "cuisines": [
         "North Indian",
         "Chinese",
         "Beverages",
         "Desserts"
         ],
         "avgRating": 4,
         "parentId": "435887",
         "avgRatingString": "4.0",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 23,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "23 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/punjabi-tadka-city-road-jawahar-nagar-neemuch-196485",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "196447",
         "name": "Shankar Madrasi Masala Dosa",
         "cloudinaryImageId": "wtk8owt1hghx7cioe2sz",
         "locality": "CRPF road",
         "areaName": "Neemuch Locality",
         "costForTwo": "₹150 for two",
         "cuisines": [
         "South Indian"
         ],
         "avgRating": 4.3,
         "veg": true,
         "parentId": "181753",
         "avgRatingString": "4.3",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 20,
         "lastMileTravel": 1.5,
         "serviceability": "SERVICEABLE",
         "slaString": "20 mins",
         "lastMileTravelString": "1.5 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 22:30:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/shankar-madrasi-masala-dosa-crpf-road-neemuch-locality-neemuch-196447",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "471899",
         "name": "Ritisha Paratha House",
         "cloudinaryImageId": "mgatvzoicrlv5rr2puvh",
         "locality": "TIT Colony",
         "areaName": "Neemuch",
         "costForTwo": "₹199 for two",
         "cuisines": [
         "North Indian"
         ],
         "avgRating": 4,
         "veg": true,
         "parentId": "283503",
         "avgRatingString": "4.0",
         "totalRatingsString": "50+",
         "sla": {
         "deliveryTime": 44,
         "lastMileTravel": 1.2,
         "serviceability": "SERVICEABLE",
         "slaString": "44 mins",
         "lastMileTravelString": "1.2 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:00:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "v1695133679/badges/Pure_Veg111.png",
               "description": "pureveg"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "pureveg",
                     "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/ritisha-paratha-house-tit-colony-neemuch-neemuch-471899",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "196486",
         "name": "New Laxmi Chaat And Ice Cream",
         "cloudinaryImageId": "r6fusvx1bvsvqzll47qe",
         "locality": "TIT Colony",
         "areaName": "Neemuch Chawni",
         "costForTwo": "₹150 for two",
         "cuisines": [
         "North Indian",
         "Chinese",
         "Beverages",
         "Desserts",
         "Snacks"
         ],
         "avgRating": 3.6,
         "veg": true,
         "parentId": "147086",
         "avgRatingString": "3.6",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 26,
         "lastMileTravel": 1,
         "serviceability": "SERVICEABLE",
         "slaString": "26 mins",
         "lastMileTravelString": "1.0 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 22:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/new-laxmi-chaat-and-ice-cream-tit-colony-neemuch-chawni-neemuch-196486",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "222578",
         "name": "Kailash Pudi Bhandar",
         "cloudinaryImageId": "w1u3d5aq3pf2vshizvdh",
         "locality": "Tagore Marg",
         "areaName": "Neemuch Chawni",
         "costForTwo": "₹200 for two",
         "cuisines": [
         "North Indian",
         "Sweets"
         ],
         "avgRating": 4.3,
         "veg": true,
         "parentId": "113575",
         "avgRatingString": "4.3",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 28,
         "lastMileTravel": 1.9,
         "serviceability": "SERVICEABLE",
         "slaString": "28 mins",
         "lastMileTravelString": "1.9 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:00:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "v1695133679/badges/Pure_Veg111.png",
               "description": "pureveg"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "pureveg",
                     "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/kailash-pudi-bhandar-tagore-marg-neemuch-chawni-neemuch-222578",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "225762",
         "name": "Gopi Misthan Bhandar",
         "cloudinaryImageId": "exykcrkqhsq0vjz1i8oa",
         "locality": "Neemuch",
         "areaName": "Neemuch Chawni",
         "costForTwo": "₹200 for two",
         "cuisines": [
         "Sweets",
         "Snacks"
         ],
         "avgRating": 4.2,
         "veg": true,
         "parentId": "89116",
         "avgRatingString": "4.2",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 18,
         "lastMileTravel": 2.4,
         "serviceability": "SERVICEABLE",
         "slaString": "18 mins",
         "lastMileTravelString": "2.4 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:00:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "v1695133679/badges/Pure_Veg111.png",
               "description": "pureveg"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "pureveg",
                     "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/gopi-misthan-bhandar-neemuch-chawni-neemuch-225762",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "734473",
         "name": "Suman Bakery",
         "cloudinaryImageId": "7884861e69959c4ad9983eeb70726246",
         "locality": "Sindhi Colony",
         "areaName": "Neemuch",
         "costForTwo": "₹198 for two",
         "cuisines": [
         "Bakery",
         "Snacks"
         ],
         "avgRating": 4.7,
         "veg": true,
         "parentId": "196862",
         "avgRatingString": "4.7",
         "totalRatingsString": "20+",
         "sla": {
         "deliveryTime": 18,
         "lastMileTravel": 1.9,
         "serviceability": "SERVICEABLE",
         "slaString": "18 mins",
         "lastMileTravelString": "1.9 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:30:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/suman-bakery-sindhi-colony-neemuch-neemuch-734473",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "196480",
         "name": "Rajkumar Restaurant",
         "cloudinaryImageId": "h4evd2uzca0jwbtfy3fn",
         "locality": "Neemuch",
         "areaName": "Gayatri Mandir",
         "costForTwo": "₹150 for two",
         "cuisines": [
         "North Indian",
         "Chinese",
         "Beverages",
         "Desserts"
         ],
         "parentId": "165716",
         "avgRatingString": "--",
         "sla": {
         "deliveryTime": 38,
         "lastMileTravel": 2,
         "serviceability": "SERVICEABLE",
         "slaString": "38 mins",
         "lastMileTravelString": "2.0 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 20:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/rajkumar-restaurant-gayatri-mandir-neemuch-196480",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "249456",
         "name": "Rajbhog Thali",
         "cloudinaryImageId": "jrmdhdjkycw50r6nhbrl",
         "locality": "Mhow Road",
         "areaName": "Neemuch Chawni",
         "costForTwo": "₹200 for two",
         "cuisines": [
         "North Indian"
         ],
         "avgRating": 4,
         "veg": true,
         "parentId": "165440",
         "avgRatingString": "4.0",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 38,
         "lastMileTravel": 2.9,
         "serviceability": "SERVICEABLE",
         "slaString": "38 mins",
         "lastMileTravelString": "2.9 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:00:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "v1695133679/badges/Pure_Veg111.png",
               "description": "pureveg"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "pureveg",
                     "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/rajbhog-thali-mhow-road-neemuch-chawni-neemuch-249456",
         "type": "WEBLINK"
      }
   }
];

const Body = () => {
  return( 
      <div className="body">
         <div className="search">
            <input placeholder="Serach food" />
            <button>Serach</button>
         </div>
         <div className="res-conatiner">
            {
               resList.map((restaurant) => (
                  <RestaurantCard key={restaurant.info.id} resData={restaurant} />
               ))
            }
         </div>
      </div>

  );
};


const AppLayout  = () => {
   return(
      <div className="app">
         <Header />
         <Body />
      </div>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);