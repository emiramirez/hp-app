import React from 'react'
import {FaBookmark} from 'react-icons/fa';
import { RiUserAddFill } from 'react-icons/ri';
export default function ButtonTop({title, icon,action}) {
    return (
        <div className="option" onClick={action}><div>{title}</div> {icon==1 ? <FaBookmark className="icons" /> : <RiUserAddFill className="icons" />}</div>
    )
}
