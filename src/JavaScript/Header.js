import React from 'react'
export default function Header(){
    return(
      <header>
         <nav className="nav">
            <div class='logo'>
         <img src="logo512.png" width="7%" height="7%" alt="Logo"></img>
         <h3>ReactFacts</h3>
         </div>
         <ul className='nav-items'>
             <li>Home</li>
             <li>About</li>
             <li>Services</li>
         </ul> 
     </nav>
     </header>)
     }