import { APP_LOGO } from "../utils/constants";
import { useContext, useState } from "react"; 
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => 
    {
        const [btnname , setbtnname] =useState("login");

        const online = useOnlineStatus();

       const data = useContext(UserContext);
       console.log(data);
 
       //selector:-
       const items = useSelector((store)=> store.cart.items);
       console.log("cart:-",items);

        return(
            <div className="header">
                <div className="head-img">
                    <img className="app-logo" src={APP_LOGO}/>
                </div>
                <div >
                    <ul className="head-links">
                       <li className="link">onlineStatus {online?"🟢":"🔴"}</li>
                       <Link to="/" className="link"><li>Home</li> </Link>
                       <Link className="link"><li>Menu</li></Link>
                       <Link to="/about" className="link"> <li>About us</li></Link>
                        <Link to="/cart"><li className="link">Cart-({items.length})</li></Link>
                       <Link to ="/contactus" className="link"> <li>Contact us</li></Link>
                        <Link className="link">
                                                            
                        <li>
                        <button className="login-btn" onClick={()=>
                            {
                                btnname==="login" ? setbtnname("logout") : setbtnname("login")
                            }
                        }>{btnname}</button>
                        </li>
                        </Link>
                        <li className="link">{data.loggedinUser}</li>
                    </ul>
                </div>
            </div>
        )
    }

export default Header;