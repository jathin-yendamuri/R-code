import { createContext } from "react";


const UserContext = createContext(
{
    loggedinUser : "defaultuser"
});

export default UserContext;