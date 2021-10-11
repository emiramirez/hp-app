import React from 'react'
import FavoriteOne from './FavoriteOne'
import {connect} from "react-redux"
const Favorites=({favoritos})=>(
        <div className={"wrapper__favorites active"}>
            {favoritos.map(f=>(
                 <FavoriteOne nombre={f.name} image={f.image} f={f}/>
            ))}
        </div>
    )
const mapStateToProps=state=>({
    favoritos:state.favoritos
})
const mapDispatchToProps=dispatch=>({})
export default  connect(mapStateToProps, mapDispatchToProps) (Favorites)