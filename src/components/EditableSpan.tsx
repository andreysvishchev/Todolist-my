import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type EditableSpan = {
    title: string
    changeTitle: (title: string) => void
}

export const EditableSpan = (props: EditableSpan) => {

    let [editMode, setEditMode] = useState(false)
    let [title, setNewTitle] = useState(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.changeTitle(title)
            setEditMode(false)
        }
    }

    const onEditMode = () => {
        setEditMode(true)
    }

    const offEditMode = () => {
        setEditMode(false)
        props.changeTitle(title)
    }

    return (
        editMode
            ? <input type="text"
                     onBlur={offEditMode}
                     value={title}
                     autoFocus
                     onChange={onChangeHandler}
                     onKeyPress={onKeyPressHandler}
            />
            : <span onDoubleClick={onEditMode}>{props.title}</span>
    );
};

