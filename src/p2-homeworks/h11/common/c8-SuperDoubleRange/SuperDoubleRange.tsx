import React from 'react'
import {Slider, withStyles} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeRange?: (event: React.ChangeEvent<{}>, value: number | number[]) => void
    value?: [number, number]
    min?: number
    max?: number
    step?: number,
    disable?: boolean,
    // min, max, step, disable, ...
}

const MySlider = withStyles({
    root: {
        color: '#ADFF2FFF'
    },
    thumb: {
        height: 20,
        width: 10,
        backgroundColor: '#9370DBFF',
        borderRadius: 3,
        marginTop: -6,
        '&:hover': {
            boxShadow: 'rgba(169, 102, 246, 0.31) 0 0 0 8px'
        },
    },
    track: {
        height: 8
    },
    rail: {
        color: '#ADFF2FFF',
        height: 8,
        borderRadius: 5,
        opacity: 1
    }
})(Slider);

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, min, max, step, disable
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    return (
        <div style={{width: 150}}>
            <MySlider value={value}
                      min={min}
                      max={max}
                      step={step}
                      disabled={disable}
                      onChange={onChangeRange}/>
        </div>
    )
}

export default SuperDoubleRange
