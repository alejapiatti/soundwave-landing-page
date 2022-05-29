import React from 'react';
import Footer from "./Footer.js";
import Navbar from './Navbar.js';
import covers from '../images/covers.jpg';
import Micro from '../images/microphone.svg';
import Albums from '../images/albums.svg';
import More from '../images/more.svg';

export default function Segunda(){
return(
<div id= "segunda">
    <Navbar/>
    <img src={covers}/>
<div>   
    <p><h1>Discover new music</h1></p>
    <button> <img src={Micro}/>Charts</button>
    <button> <img src={Albums}/>Albums</button>
    <button> <img src={More}/>More</button>
    <p>By joining you can benefit by listening to the latest albums released. </p>
</div> 
    <Footer/>
</div>
)

}
