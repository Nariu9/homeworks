import React from 'react'
import {AffairType} from "./HW2";
import classes from "./Affair.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const priorityColor = props.affair.priority === 'high' ? classes.high : props.affair.priority === 'middle' ? classes.middle : props.affair.priority === 'low' ? classes.low : ''

    return (
        <div className={classes.container}>
            <div className={classes.affairName}>{props.affair.name} </div>
            <div className={`${classes.affairPriority} ${priorityColor}`}>[{props.affair.priority}]</div>
            <SuperButton onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
