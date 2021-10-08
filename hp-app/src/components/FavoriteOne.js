import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri';
export default function FavoriteOne({ open, handleClick }) {
   
    return (
        <div className="option__fav">
           
            <img src="http://hp-api.herokuapp.com/images/hermione.jpeg" alt="image" className="img__icon"/>
            <div>asdadsas</div>
            <RiDeleteBin5Line className="delete__icon"/>
           
        
        </div>
    )
}
