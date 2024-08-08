import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";



const Catitems = ({catitems})=>
{

const dispatch = useDispatch();

    return (
        <ul className="res-menu-items">
  
        {
          catitems.itemCards.map((item)=>
      (
          <li key={item.card.info.id} className="item-container">
              <div className="menu-item">
             <div> 
              <h3>{item.card.info.name}</h3>
              <h4>Rs : {Math.round(item.card.info.price/100)}/-</h4>
             <p className="menu-item-description">{item.card.info.description}</p>
              <p><span className="menu-item-rating"><span>&#9733;  </span>
              {item.card.info.ratings.aggregatedRating.rating}</span>&nbsp;
              ({item.card.info.ratings.aggregatedRating.ratingCountV2 || "no-ratings"})</p>                               
      
             </div>

              <div className="menu-img">
                <img className="menu-item-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId}/>
                <button className="add" onClick={()=>dispatch(addItem(item))}>Add+</button>
                </div>
              </div>
             
          </li>
          ))
        }
      </ul> 
    )
}

export default Catitems;