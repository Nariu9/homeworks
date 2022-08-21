import React from 'react';
import s from './HW12.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC, ThemeType} from './bll/themeReducer';

const themes = ['dark', 'red', 'some', 'blue'];

function HW12() {
    //const theme = 'dark'; // useSelector
    const theme = useSelector<AppStoreType, ThemeType>(state => state.themes.theme)

    const dispatch = useDispatch()

    const themeChangeHandler = (newTheme: ThemeType) => {
        dispatch(changeThemeC(newTheme))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
                <SuperRadio
                    name={'themes'}
                    options={themes}
                    value={theme}
                    onChangeOption={themeChangeHandler}/>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
