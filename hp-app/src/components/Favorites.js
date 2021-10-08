import React from 'react'
import FavoriteOne from './FavoriteOne'

export default function Favorites({active=1}) {
    
    return (
        <div className={"wrapper__favorites hidden"}>
            <FavoriteOne />
            <FavoriteOne />
            <FavoriteOne />
            <FavoriteOne />
            <FavoriteOne />
          
        </div>
    )
}
