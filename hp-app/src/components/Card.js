import React from 'react'
import {FaRegBookmark} from 'react-icons/fa';
export default function Card({homeHouse}) {
    return (
        <div className="component__card">
            <div className={"photo__card "+homeHouse}>
                <div className="photo">
                <img src="http://hp-api.herokuapp.com/images/hermione.jpeg" alt="image" className="img"/>
                </div>
            </div>
            <div className="info__card">
                <div className="top__card"> 
                   <div className="top__live"> 
                        <div>VIVO </div>
                        <div className="top__aux">&nbsp; / &nbsp;</div>
                        <div>ESTUDIANTE </div>
                   </div>
                   <FaRegBookmark className="icon__live"/>
                </div>
                <div className="name__card">
                    <div>Harry Potter</div>
                </div>
                <div className="dates__card">
                    <div className="date__content"><div className="dates_title">Cumpleaños:</div>asdas</div>
                    <div className="date__content"><div className="dates_title">Genero:</div>asdas</div>
                    <div className="date__content"><div className="dates_title">Color de ojos:</div>asdas</div>
                    <div className="date__content"><div className="dates_title">Color de pelo:</div>asdas</div>

                </div>

            </div>
            
        </div>
    )
}
