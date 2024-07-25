import React from "react";
import ReactDOM from "react-dom/client";
import Body from './components/Body.js';
import Header from './components/Header.js';
import About from "./components/About.js";
import Contactus from "./components/Contactus.js";
import RouteError from "./components/RouteError.js";
import Menu from "./components/Menu.js";
import Cart from "./components/Cart.js";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";


const AppRoot = () =>
    {
        return(
            <div className="app-root">
                <Header/>
               {/* used for child routes */}
               <Outlet/>
            </div>
            
        );
    }

    // used to create route configiration. 
const approute = createBrowserRouter([
    {
        path: "/",
        element: <AppRoot/>,
        children: [

            {
                path:"/",
                element:<Body/>
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/contactus",
                element: <Contactus/>
            },
            {
                path: "/menu/:resid",
                element: <Menu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }

        ],
        errorElement: <RouteError/>
    }
])

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={approute}/>);

