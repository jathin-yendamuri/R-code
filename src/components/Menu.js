import {useEffect , useState } from "react";
import {useParams} from "react-router-dom";
import Shimmerui from "./Shimmerui";
import useResMenuAPI from "../utils/useResMenuAPI";
import useOnlineStatus from "../utils/useOnlineStatus";
import Accordian from "./Accordian";

const Menu = ()=>
{

    const {resid} = useParams();

   const menuobj = useResMenuAPI(resid);
       

    if (menuobj === null){
        return <Shimmerui/>
    } 

    console.log(menuobj);
    
    const catfilter = menuobj.filter((c) =>{
        return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"});
    console.log("hii 2..!");
    console.log(catfilter);
    return (

        catfilter.map((cat)=>
        {
               return <Accordian key = {cat.card.card.title} cat={cat.card.card}/>
        })
            
           );
};

export default Menu







/*

<ul className="res-menu-items">
                      {
                        menuobj.map((item)=>
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
          
                            <div><img className="menu-item-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId}/></div>
                            </div>
                           
                        </li>
                        ))
                      }
                    </ul> 





                     <ul>
                    {
                        menuobj.map((item) => (
                            <div className="menuk">
                                <div><h3>{item.card.info.name} -{item.card.info.price/100}/-</h3>
                                {item.card.info.description}
                                <p><span className="ratingk">&#9733;{item.card.info.ratings.aggregatedRating.rating}</span>
                                ({item.card.info.ratings.aggregatedRating.ratingCountV2 || "no-rating"})
                                </p>
                                </div>
                                <div>
                                <img className="imgk" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId}/>
                                </div> 
                            </div>
                            
))
                    }
                </ul>
        

 const [ menuobj , setmenuobj ]= useState([]);

        useEffect(()=>{
            fetchdata();}
            ,[]
        );

        const { resid } = useParams();
        console.log(resid);
       
        const fetchdata = async ()=>
         {
            const data = await fetch(MENU_API+resid);
            const json = await data.json();
            console.log("menu:-");
            console.log(json);  
            setmenuobj(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        }






































        <div className="res-menu">
                
<ul className="res-menu-items">
                      {
                        catfilter[0].card.card.itemCards.map((item)=>
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
          
                            <div><img className="menu-item-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId}/></div>
                            </div>
                           
                        </li>
                        ))
                      }
                    </ul> 
        
   
            </div>

                

                    */








































