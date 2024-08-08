import {useState,useEffect} from "react";



const useResAPI = ()=>
{


    const [ListOfRes , setListOfRes] = useState([]);
       
    const [searchedres , setsearchedres] = useState([]);


    useEffect(()=>
        {
          fetchdata();
        },[]
      );


        const fetchdata = async ()=>
          {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.727455&lng=83.29775470000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            
            const json = await data.json(); 
            //optional chaning
            //we chaned the vallue of the state var , so the whole component will rerender and update the ui with this new data..
            setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setsearchedres(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            console.log(json);
          }

          return [ListOfRes,searchedres,setsearchedres];
}

export default useResAPI;