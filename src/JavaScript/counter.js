import React from "react";
import Count from "./Count";
export default function Counter(){

const [count,setCount]=React.useState(0);

    function Add(){
        setCount(()=>
             count+1
        )
    }
    function Subtract(){
        setCount(()=>
            count-1
        )
    }

   return (
        <div >
            <div className="input--text">
            <button onClick={Add}>+</button>
            {/* <button className="input--button">{count}</button> */}
            <Count number={count} />
            <button onClick={Subtract}>-</button>
        </div>
        </div>
    )
}