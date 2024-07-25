import { useRouteError } from "react-router-dom";
//useRouteError is a hook provided by the react-router-dom , this gives more info about the error to us ..
// it returns a object .

const RouteError = ()=>
{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops..!!!</h1>
            <h2>Somethig went wrong..!</h2>
            <h3>{err.status} : {err.statusText}</h3>
            <h5>{err.error.message}</h5>
        </div>
    );
};

export default RouteError;