import React from 'react';
import Star from './Star';
export default function Contact(props){
    const [Card,setCard]=React.useState({phone:"0300-1234121",
    email:"kas31@gmail.com",name:"Lovely Cat",isFavorite:false})
  
    const favIcon=Card.isFavorite? "./Cats/Star.png":"./Cats/Star2.png";
  function toggleFav(){
    setCard(prevState=>{
        
            return {...prevState,isFavorite:!Card.isFavorite};
            
        })
   
  }
   
   
    let badgeTest;
    if(props.openSpot===true){
        badgeTest="SOLD OUT";
    }
    else{
        badgeTest="ONLINE";

    }
    return(
       <div className='Gallery'>
       <div className='FlexBox'>
       <contact>
        {badgeTest &&<div className="badge">{badgeTest}</div>}
       <img className="cat" src={`../Cats/${props.img}`} alt='cat'></img>
       <div className='cardName--img'>
       <h3>{Card.name}</h3>
       <Star image={favIcon} toggleFavorite={toggleFav}/>
       </div>
       <call className="call">
       <img className='phone' src='./Cats/call.png' alt='phone'></img>
       <span>{Card.phone}</span>
       </call>
       <email className="call">
       <img className='phone' src='./Cats/email.png' alt='phone'></img>
       <span>{props.email}</span>
       </email>
       </contact>
      
       </div>
       </div>
       )
 }