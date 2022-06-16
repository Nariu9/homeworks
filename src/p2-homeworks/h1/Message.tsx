import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={s.container}>
                <h3>{props.name}</h3>
                <p className={s.text}>{props.message}</p>
                <time>{props.time}</time>
            </div>
        </div>
    )
}

export default Message
