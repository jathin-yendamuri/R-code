import { useEffect , useState } from "react";
import { MENU_API } from "./constants";

const useResMenuAPI = (resid)=>{

    const [menuobj,setmenuobj] = useState(null);
     //console.log("hello");
    useEffect(()=>
    {
        fetchdata();
    },[]);

    const fetchdata = async()=>
    {
        const data = await fetch(MENU_API+resid);
        const json = await data.json();
        console.log("hii");
        console.log(json);
               // executes after the component renders
        setmenuobj(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    }

return menuobj;
    
}

export default useResMenuAPI;