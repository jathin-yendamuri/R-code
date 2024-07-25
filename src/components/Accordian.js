
import Catitems from "./Catitems";
import { useState } from "react";

const Accordian = ({cat})=>
{

        const [show,setshow] = useState(false); 

    console.log("hello iam cat",cat);
    return( 
        <div> 
                <div className="res-menu">

                <div className="cat" onClick={()=> show ? setshow(false) : setshow(true)}>
                    <h1>{cat.title}({cat.itemCards.length})</h1>
                  <img src="https://cdn.iconscout.com/icon/free/png-512/free-down-arrow-1965050-1660443.png?f=webp&w=25"/>
                  </div>

          {show &&  <Catitems catitems={cat}/> }  


            </div>
        </div>

    )
}

export default Accordian;