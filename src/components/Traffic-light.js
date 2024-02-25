import './Traffic-light.css'
import React, { useState } from 'react';

function Trafficlight(){
    const [ color, setColor ] = useState(null);
    let Glowred=" "
    let Glowyellow=" "
    let Glowgreen= " "
    
    if(color==="red"){
         Glowred= "glow";
    }
    if(color==="yellow"){
        Glowyellow="glow";
    }
    if(color==="green"){
        Glowgreen="glow";
    }

    return <div className="Semaforo">
        <div className="Estructura bg-dark"></div>
        <div className='Luces bg-dark mx-auto d-inline-block p-4 rounded'>
        <div className={"Redlight " + Glowred } onClick={() => setColor('red')}> </div>
        <div className={"Yellowlight "+ Glowyellow} onClick={() => setColor('yellow')}> </div>
        <div className={"Greenlight "+Glowgreen}onClick={() => setColor('green')}></div>
        </div>

    </div>


}
export default Trafficlight