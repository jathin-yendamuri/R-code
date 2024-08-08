import React from "react";
import UserContext from "../utils/UserContext";

class Aboutclass extends React.Component{

    constructor(props)
    {
        super(props);
       console.log("child1 constructor");
    }


    componentDidMount(){
        console.log("child1 componentdidmount");
       } 

       

    render() {
        const {name,age} = this.props;
   
        console.log("child1 render");

        return(
            <div className="fun">
                <div>
                
                <UserContext.Consumer>
                    {(loggedinUser) => (<h1>{loggedinUser}</h1>)}
                </UserContext.Consumer>
            </div>
                
                <h1>{name}</h1>
              
            </div>
        )
    }
}

export  default Aboutclass; 


