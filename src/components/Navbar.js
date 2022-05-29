import React from 'react';
import Logo from '../images/logo.png';

export default function Navbar(){
    return(
    <div calssName="Navbar">
        <a href= "#front"><button><img src={Logo}/>Soundwave</button></a>
        <a href= "#segunda"><button>Discover</button></a>
        <a href= "#tercera"><button>Join</button></a>
    </div>
    )

    }