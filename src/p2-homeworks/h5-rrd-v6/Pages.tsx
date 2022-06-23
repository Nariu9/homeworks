import React from 'react'
import {Route, Routes, Navigate} from "react-router-dom";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import Junior from "../h5-rrd-v6/pages/Junior";
import JuniorPlus from "../h5-rrd-v6/pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIORPLUS: '/junior-plus',
    // add paths
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIORPLUS} element={<JuniorPlus/>}/>
                {/*// add routes*/}

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
