import React from 'react'
import { useState, useEffect } from 'react';

export default function Button({title, onClick}) {
    const [clicked, setClicked] = useState(false);
    return (
        <div onClick={ () => setClicked(true) }>
        <div className={ `button ${clicked && 'active'}` } onClick={onClick}> 
            <h2 >{title}</h2>
            
        </div>
        </div>
    )
}
