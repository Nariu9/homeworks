import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnterPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnterPress} // деструктуризация пропсов
) => {

    return (
        <div className={s.container}>
            <div className={s.inputWrapper}>
                <SuperInputText value={name}
                                onChange={setNameCallback}
                                onKeyPress={onEnterPress}
                                error={error}/>
            </div>
            <SuperButton onClick={addUser} disabled={!name}>add</SuperButton>
            <span className={s.counter}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
