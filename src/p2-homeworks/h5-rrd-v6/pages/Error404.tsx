import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.container}>
            <div className={s.text}>4<span>&#9888;</span>4 Page Not Found</div>

            {/*<div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>*/}
        </div>
    )
}

export default Error404
