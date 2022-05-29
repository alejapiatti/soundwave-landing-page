import React from 'react';
import Logo from '../images/logo.png';

export default function Navbar(){
    return(
    <div calssName="Navbar">
        <a href= "#front"><button><img src={Logo}/>Soundwave</button> alt= "soundwave</a>
        <a href= "#segunda"><button>Discover</button> alt= "discovery"</a>
        <a href= "#tercera"><button>Join</button> alt= "join"</a>
    </div>
    )

    }