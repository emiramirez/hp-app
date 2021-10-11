import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri';
import {connect} from "react-redux"
const FavoriteOne=({props,nombre, image, quitarFavorito,f})=>(
        <div className="option__fav">
            <img src={image} alt="image" className="img__icon"/>
            <div>{nombre}</div>
            <RiDeleteBin5Line className="delete__icon" onClick={()=>quitarFavorito(f)}/>
        </div>
    )
const mapStateToProps=state=>({
    favoritos:state.favoritos
})
const mapDispatchToProps=dispatch=>({

    quitarFavorito(favorito){
        dispatch({
            type:"QUITAR_FAVORITO",
            favorito
        })
    }
})
export default  connect(mapStateToProps, mapDispatchToProps) (FavoriteOne)