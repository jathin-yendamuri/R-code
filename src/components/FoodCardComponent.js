import { useContext } from "react";
import UserContext from "../utils/userContext";

const FoodCardComponent = ( prop ) =>
    {
        const { dataobj } = prop;

        const {loggedinUser} = useContext(UserContext);

        return(
            <div className="res-card">
                <div className="res-logo">
                    <img className ="res-logo" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +  dataobj.info.cloudinaryImageId} />
                </div>
                <div className="res-card-content">
                    <h3 className="res-head">{dataobj.info.name}</h3>
                    <p ><span className="res-rating">{dataobj.info.avgRating}</span> star ,  {dataobj.info.costForTwo} </p>
                    <p>locaction : {dataobj.info.areaName}</p>
                    <h5>{dataobj.info.cuisines.join(" , ")}</h5>
                    <h5>User : {loggedinUser}</h5>
                </div>
            </div>
        )
    }

export default FoodCardComponent;












