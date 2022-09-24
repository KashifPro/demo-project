import React from 'react'
import ReactDOM from 'react-dom';
import Header from './JavaScript/Header';
// import AddItems from './JavaScript/Add-Items';
// import Counter from './JavaScript/counter';
// import Meme from './JavaScript/Meme';
import App from './JavaScript/Contact-Data';
// import Meme from './JavaScript/Meme';

function Page(){
   return(
    <div className='Page'>
    <Header />
    
   <App />
   {/* <AddItems /> */}
    </div>
   )
}
ReactDOM.render(<Page />, document.getElementById('root'))


 {/* <Meme /> */}
   {/* <App />
   <App /> */}