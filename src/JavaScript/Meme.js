import React from 'react';
import ImagesData from './Images-data';
export default function Meme(){
    const [Buttons,setButton]=React.useState({topText:"",bottomText:"",randomUrl:"https://api.memegen.link/images/pigeon/Engineer/_/Is_this_Photoshop~q.png?style=https://i.imgur.com/W0NXFpQ.png"});
    function Clicked(){
        const memesArray=ImagesData.memes;
        const randomNumber=Math.floor(Math.random()*memesArray.length)
        const url=memesArray[randomNumber].url;
        setButton(prev=>({
           ...prev,randomUrl:url
        }))
    }

    return(
        <div className="grid--main">
        <div className="form">
      <div className="input--text">
         <input type="text" placeholder="upperText"></input>
         <input type="text" placeholder="lowerText"></input>
         </div>
         <div className="input--button">
         <button  onClick={Clicked} className="sub--button">Push to Generate the Meme</button>
         <img className="Meme--img" src={Buttons.randomUrl} alt='cat'></img>    
    </div>
    
    </div>
     </div>
    )
}