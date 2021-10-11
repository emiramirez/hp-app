import React from 'react'
import {FaRegBookmark} from 'react-icons/fa';
import {connect} from "react-redux"
const Card=({props, agregarFavoritos})=>(
    
        <div className={props.alive?"component__card":"component__card death"} >
            <div className={"photo__card "+props.house}>
                <div className="photo">
                <img src={props.image} alt="image" className="img"/>
                </div>
            </div>
            <div className="info__card">
                <div className="top__card"> 
                   <div className="top__live"> 
                   {(props.alive?<div>VIVO </div>:<div>MUERTO</div>)}
                        <div className="top__aux">&nbsp; / &nbsp;</div>
                        {(props.student?<div>Estudiante</div>:<div>STAFF</div>)}
                   </div>
                   <FaRegBookmark className="icon__live" onClick={()=>agregarFavoritos(props)}/>
                </div>
                <div className="name__card">
                    <div>{props.name}</div>
                </div>
                <div className="dates__card">
                    <div className="date__content"><div className="dates_title">Cumpleaños: {props.alive} </div>{props.dateOfBirth}</div>
                    <div className="date__content"><div className="dates_title">Genero:</div>{props.gender}</div>
                    <div className="date__content"><div className="dates_title">Color de ojos:</div>{props.eyeColour}</div>
                    <div className="date__content"><div className="dates_title">Color de pelo:</div>{props.hairColour}</div>
                </div>

            </div>
            
        </div>
    )
    const mapStateToProps=state=>({
        favoritos:state.favoritos
    })
    
    const mapDispatchToProps=dispatch=>({
        agregarFavoritos(favorito){
            dispatch({
                type:'AGREGAR_FAVORITO',
                favorito
            })
        }
    })
    export default  connect(mapStateToProps, mapDispatchToProps) (Card)