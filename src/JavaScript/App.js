import React from 'react';
import details from './details';
import Contact from './Contact';
export default function App(){
    const element=details.map((nuts)=>{
        return <Contact {...nuts} />
    })    
        
    return(
        <main>
        <div className="Contacts">
            {element}
           </div>
           
        </main>
            )

}
// export default function App(){
//     return(
//        <main>
//        <div className="Contacts">
//        <Contact
//        img="1.jpg"
//        name="Lovely Cat"
//        phone="0306-1234567"
//        email="kas123@gmial.com"
//        />
//        <div className="Contacts">
//        <Contact
//        img="2.jpg"
//        name="Stylish Cat"
//        phone="0305-9214567"
//        email="Race123@gmial.com"
//        />
//        </div>
//        </div>
//        <div className="Contacts">
//        <Contact
//        img="3.jpg"
//        name="Clever Cat"
//        phone="0303-4234567"
//        email="Run123@gmial.com"
//        />
//        <div className="Contacts" id='Fourth'>
//        <Contact
//        img="4.jpg"
//        name="Lion Cat"
//        phone="0301-2234567"
//        email="kas123@gmial.com"
//        />
//        </div>
//        </div>
//        </main>
//     )
//  }