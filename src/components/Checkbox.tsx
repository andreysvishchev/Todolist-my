import React from "react";
import style from './Checkbox.module.css'

type CheckboxType = {
    checked: boolean
    callBack: () => void
}

export const Checkbox = (props: CheckboxType) => {

    const onChangeHandler = () => {
        props.callBack()
    }
    return (
        <label>
            <input className={style.checkbox_input} type="checkbox" checked={props.checked} onChange={onChangeHandler}/>
            <span className={style.checkbox}/>
        </label>
    )
}