import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './AddedForm.module.css'

type AddedFormType = {
    addTitle: (value: string) => void
}


export const AddedForm = (props: AddedFormType) => {


    const [value, setValue] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const addTitle = () => {
        let newValue = value.trim()
        if (newValue === '') {
            setError('Title is required')
            setValue('')
        } else {
            props.addTitle(newValue)
            setValue('')
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === 'Enter') {
            addTitle()
        }
    }

    return (

        <div className={style.wrap}>
            <input className={error ? style.error + ' ' + style.input : style.input}
                   placeholder={error ? 'Title is required' : ''}
                   type="text" value={value}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTitle} className={style.button}>+</button>
        </div>
    );
};

