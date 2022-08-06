import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (value: number) => {
        setValue1(value)
    }
    const onChangeDoubleRange = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        const min = Array.isArray(value) ? value[0] : value
        const max = Array.isArray(value) ? value[1] : value
        setValue1(min)
        setValue2(max)
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.container}>
                <span className={s.values}>{value1}</span>
                <SuperRange onChangeRange={onChangeRange}
                            value={value1}
                    // сделать так чтоб value1 изменялось
                />
                <span className={s.values}>{value2}</span>
            </div>

            <div className={s.container}>
                <span className={s.values}>{value1}</span>
                <SuperDoubleRange value={[value1, value2]}
                                  onChangeRange={onChangeDoubleRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span className={s.values}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
