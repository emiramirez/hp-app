import React from 'react'
import Button from './Button'

export default function Add(props) {
    if(!props.form){
        return null
    }
    return (
        <div className="modal">
        <div className="add__form">
            <div className="top__form">
                <div>

                    <p className="form__title">Agregar un personaje</p>
                </div>
                <div onClick={()=>props.onClose()} className="close">X</div>
            </div>
            <div className="body__form">
                <div className="row__form">
                    <div className="cell__form">NOMBRE
                        <input type="text" className="input__form"/>
                    </div>
                    <div className="cell__form">CUMPLEAÑOS
                        <input type="text" className="input__form"/>
                    </div>
                </div>
                <div className="row__form">
                    <div className="cell__form">COLOR DE OJOS
                        <input type="text" className="input__form"/>
                    </div>
                    <div className="cell__form">COLOR DE PELO
                        <input type="text" className="input__form"/>
                    </div>
                </div>
                <div className="row__form titles__form">
                    <div className="cell__form__r1">GÉNERO
                      
                    </div>
                    <div className="cell__form__r2">POSICIÓN
                
                    </div>
                </div>
                <div className="row__form">

                    <div className="radios__form">
                        <div>
                        <input type="radio" value="M" name='sex'/>Mujer
                        </div>
                        <div>
                        <input type="radio" value="H" name='sex'/>Hombre
                        </div>
                        <div>
                        <input type="radio" value="H" name='position'/>Estudiante
                        </div>
                        <div>
                        <input type="radio" value="H" name='position'/>Staff
                        </div>
                    </div>
                </div>
                
                <div className="cell__form__foo">
                    FOTOGRAFIA
                    <input type="file" className=""/>
                </div>
                
            </div>
            <div className="footer__form">
                <Button title="GUARDAR"/>
                
            </div>
            
        </div></div>
    )
}
