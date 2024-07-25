import React from "react";

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
                <h1>{name}</h1>
              
            </div>
        )
    }
}

export  default Aboutclass; 


