import React from 'react';
import Twitter from '../images/twitter.svg';
import Facebook from '../images/facebook.svg';
import {Footerestilo} from './Estilofooter.js';


function Footer(){ 
  return (
  <Footerestilo className="footer">
    <div>
        <button><a href= "#footer">About Us</a></button>
        <button><a href= "#footer">Contact</a></button>   
    </div> 

    <div>
        <button><a href ="#footer"><img src={Twitter}/>Twitter</a></button>
        <button><a href ="#footer"><img src={Facebook}/>Facebook</a></button>
    </div>
             
  </Footerestilo>)
};
export default Footer;
