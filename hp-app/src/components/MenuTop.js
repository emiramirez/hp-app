import React from 'react'
import ButtonTop from './ButtonTop'
import { useState } from 'react';
export default function MenuTop(props) {

    return (
        <div className="head__menu"> 
            
            <ButtonTop title="FAVORITOS" icon="1" onClick={()=>props.action()}/>
            
            <ButtonTop title="AGREGAR" icon="2" onClick={()=>props.action2()}/> 
            
            
            
        </div>
    )
}
