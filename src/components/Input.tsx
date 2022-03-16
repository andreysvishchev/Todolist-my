import React, {ChangeEvent, KeyboardEvent} from "react";
import style from './Input.module.css'
import {ErrorType} from "../Todolist";

type InputType = {
    value: string
    setValue: (value: string) => void
    addTask: (value: string) => void
    error: ErrorType
    setError: (value: null) => void
}
export const Input = (props: InputType) => {

    const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setValue(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        props.setError(null)
        if (event.key === 'Enter') {
            props.addTask(props.value)
        }
    }

    return (
        <input className={props.error ? style.error + ' ' + style.input : style.input}
               placeholder={'Enter task'}
               type="text"
               onChange={onchangeHandler}
               onKeyPress={onKeyPressHandler}
               value={props.value}/>
    )
}