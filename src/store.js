import { createStore } from "redux";
const initialState={
    favoritos:[
        
    ]
}
const reducerF=(state=initialState,action)=>{
    console.log(action)
    if(action.type=='AGREGAR_FAVORITO'){
        if(state.favoritos.length<=4){
            console.log(state)
            return {
                ...state,
                favoritos:state.favoritos.concat(action.favorito)
            }
        }
        
    }
    if(action.type=='QUITAR_FAVORITO'){
        return {
            ...state,
            favoritos:state.favoritos.filter(j=>j.name!==action.favorito.name)
        }
    }
    return state
}
export default createStore(reducerF)