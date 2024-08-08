import React from "react";

import Aboutclass from "./Aboutclass";
 

class About extends React.Component{

    constructor()
    {
        super();
            this.state={
                 name2:"parent"
            }

            console.log("parent constructor");

               
    }

   componentDidMount(){
    console.log("parent componentdidmount");
   } 


render()
{

    const {name2} = this.state;
    console.log("parent render");

    return(

        <div className="about">
            
            <div className="fun">
            <h1>{name2}</h1>
            </div >
            < Aboutclass name="child1"/>
            
        </div>
    );
};
}

export default About;

