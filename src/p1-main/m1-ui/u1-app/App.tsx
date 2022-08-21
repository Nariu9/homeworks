import React from 'react'
import s from './App.module.css'
import HW5 from '../../../p2-homeworks/h5-rrd-v6/HW5';
// import {useSelector} from 'react-redux';
// import {AppStoreType} from '../../../p2-homeworks/h10/bll/store';
// import {ThemeType} from '../../../p2-homeworks/h12/bll/themeReducer';
// import c from '../../../p2-homeworks/h12/HW12.module.css'


function App() {

    // const theme = useSelector<AppStoreType, ThemeType>(state => state.themes.theme)

    return (
        <div className={s.App}>
            {/*<div className={`${c[theme]} ${c[theme + '-text']}`}>*/}
            <div>react homeworks:</div>
            {/*<HW1/>
            <HW2/>
            <HW3/>
            <HW4/>*/}
            <HW5/>
        </div>
    )
}

export default App
