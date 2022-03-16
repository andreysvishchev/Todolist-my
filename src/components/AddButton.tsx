import React from "react";
import style from './AddButton.module.css'

type AddButtonType = {
    name: string
    value: string
    addTask: (value: string)=> void

}

export const AddButton = (props: AddButtonType) => {
    const onClickHandler = () => {
        props.addTask(props.value)
    }


    return (
        <button className={style.button} onClick={onClickHandler} >{props.name}</button>
    )
}