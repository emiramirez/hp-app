import React from 'react'
import ButtonTop from './ButtonTop'
import { useState } from 'react';
export default function MenuTop() {
    const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle =()=> {
     setMobileOpen(!mobileOpen)
      console.log("chenged :-", mobileOpen,)
  };
    return (
        <div className="head__menu"> 
            
            <ButtonTop title="FAVORITOS" icon="1"  action={handleDrawerToggle}/>
            
            <ButtonTop title="AGREGAR" icon="2"/> 
            
            
            
        </div>
    )
}
