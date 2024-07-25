import { APP_LOGO } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>
    {
        const [btnname , setbtnname] =useState("login");

        const online = useOnlineStatus();

        return(
            <div class="text-3xl font-bold underline">
                <div className="head-img">
                    <img className="app-logo" src={APP_LOGO}/>
                </div>
                <div >
                    <ul className="head-links">
                       <li className="link">onlineStatus {online?"🟢":"🔴"}</li>
                       <Link to="/" className="link"><li>Home</li> </Link>
                       <Link className="link"><li>Menu</li></Link>
                       <Link to="/about" className="link"> <li>About us</li></Link>
                        <Link to="/cart"><li className="link">Cart</li></Link>
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
                    </ul>
                </div>
            </div>
        )
    }

export default Header;