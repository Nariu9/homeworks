import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.container}>
            {/*// add NavLinks*/}
            <div className={s.links}>
                <NavLink className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link}
                         to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
                <NavLink className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link}
                         to={PATH.JUNIOR}>junior</NavLink>
                <NavLink className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link}
                         to={PATH.JUNIORPLUS}>junior+</NavLink>
                <div className={s.link}>Hover me!</div>
            </div>

        </div>
    )
}

export default Header
