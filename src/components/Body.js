import FoodCardComponent from './FoodCardComponent';
import { useState , useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import Shimmerui from './Shimmerui';
import useOnlineStatus from '../utils/useOnlineStatus';
import useResAPI from '../utils/useRestAPI';
import UserContext from '../utils/userContext';

const Body = () =>
    {

      // creating state variables

      const [searchval , setsearchval] = useState([]);
/*
        const [ListOfRes , setListOfRes] = useState([]);
       
        const [searchedres , setsearchedres] = useState();
     
        // this executes when the whole body component is rendered.
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

*/
    const {setusername} = useContext(UserContext);

    const [ListOfRes,searchedres,setsearchedres] = useResAPI();

          const online = useOnlineStatus();
          console.log(online);
          if (online === false) return <h1>please check your internet connection ...!!</h1>;
  

          //conditional rendering 

     return ListOfRes.length === 0 ?
       <Shimmerui/>  :      

        (
        <div className="app-body">     
          
            <div className="search">
              <input type='text' placeholder='search restaurant' value={searchval} onChange={(e)=>
                {
                  setsearchval(e.target.value);
                }
              }/>

              <button className='search-btn' onClick={()=>
                {
                  //filter the res cards and ipdate the UI.
                 const searchListOfRes = ListOfRes.filter((res)=> res.info.name.toLowerCase().includes(searchval.toLowerCase()));
                 console.log(searchListOfRes);
                 setsearchedres(searchListOfRes);
                }
              }>Search</button>

             <button className='topRate-btn' onClick={()=>
                {
                  const filteredRes =  ListOfRes.filter((res)=> res.info.avgRating > 4.4);
                  console.log("topRated:-");
                  console.log(filteredRes);
                  setsearchedres(filteredRes);
                }}>Top RATED Restaurants</button>
           
           
              <label>User Name : </label>
              <input type='text' placeholder='user name' onChange={(e)=>setusername(e.target.value)} />
           

            </div>
        
               <div className="restarunts">
                 {
                        
                        searchedres.map((dataobj)=>
                        (
                          <Link 
                          key = {dataobj.info.id} 
                          to = { "/menu/" + dataobj.info.id }
                          >

                                <FoodCardComponent  dataobj = {dataobj} />

                          </Link> 
                        ))
                }

                    </div>
        </div>
        )
    }

export default Body;


/*

 <button className='topRate-btn' onClick={()=>
                {
                  const filteredRes =  ListOfRes.filter((res)=> res.info.avgRating > 4.5);
                  console.log("topRated:-");
                  console.log(filteredRes);
                  setsearchedres(filteredRes);
                }}>Top RATED Restaurants</button>

                */







