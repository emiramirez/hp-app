import React from 'react'
import {FaRegBookmark} from 'react-icons/fa';
export default function Card({homeHouse, image, name, student,alive}) {
    return (
        
        
        <div className="component__card">
            <div className={"photo__card "+homeHouse}>
                <div className="photo">
                <img src={image} alt="image" className="img"/>
                </div>
            </div>
            <div className="info__card">
                <div className="top__card"> 
                   <div className="top__live"> 
                   {(alive?<div>VIVO</div>:<div>MUERTO</div>)}
                        <div className="top__aux">&nbsp; / &nbsp;</div>
                        {(student?<div>Estudiante</div>:<div>STAFF</div>)}
                      
                   </div>
                   <FaRegBookmark className="icon__live"/>
                </div>
                <div className="name__card">
                    <div>{name}</div>
                </div>
                <div className="dates__card">
                    <div className="date__content"><div className="dates_title">Cumpleaños:</div>12-05-1998</div>
                    <div className="date__content"><div className="dates_title">Genero:</div>Male</div>
                    <div className="date__content"><div className="dates_title">Color de ojos:</div>Black</div>
                    <div className="date__content"><div className="dates_title">Color de pelo:</div>Brown</div>
                </div>

            </div>
            
        </div>
    )
}
