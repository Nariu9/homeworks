import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyDownHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDownHandler} // деструктуризация пропсов
) => {
    const inputClass = !error ? s.ok : s.error // need to fix with (?:)

    return (
        <div className={s.container}>
            <input value={name} onChange={setNameCallback} onKeyDown={onKeyDownHandler} className={inputClass}/>
            <button onClick={addUser} disabled={!name}>add</button>
            <span className={s.counter}>{totalUsers}</span>
            <span className={s.notification}>{error}</span>
        </div>
    )
}

export default Greeting
