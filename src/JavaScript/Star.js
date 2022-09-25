import React from "react";

export default function Star(props){

    return(
        <img className='toggle--star' onClick={props.toggleFavorite} src={props.image} alt={"cat"}></img>
    )
}