import React from 'react';
export default function AddItems(){
    const [addItemsArray,setAddItemsArray] = React.useState(["item 1","item 2"]);


function Clicked(){
 setAddItemsArray((prev)=>{
    return [...prev,`Item ${prev.length+1}`]
 })
}

const elementArray=addItemsArray.map((items)=><p key={items}>{items}</p>) 
return(
    <div className="grid--main">
    <div className="form">
  
     <div className="input--button">
     <button  onClick={Clicked} className="sub--button">Push to Generate the Meme</button>
     
     <p className="input--text" id='through--Item'>{elementArray}</p>
     
     </div>

</div>
 </div>
)
}