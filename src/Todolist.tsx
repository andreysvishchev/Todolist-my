import React, {useState} from "react";
import {AddButton} from "./components/AddButton";
import {Input} from "./components/Input";
import style from "./Todolist.module.css";
import {state, StateType} from "./state/state";
import {v1} from "uuid";
import {Checkbox} from "./components/Checkbox";


type TodolistType = {
    state: StateType[]
    title: string
}

type FilterType = 'All' | 'Completed' | 'Uncompleted'

export type ErrorType = string | null

export const Todolist = (props: TodolistType) => {

    let [value, setValue] = useState('')
    let [tasks, setTasks] = useState<StateType[]>(state)
    let [filter, setFilter] = useState<FilterType>('All')
    let [error, setError] = useState<ErrorType>(null)

    function addTask(value: string) {
        let NewTask = {id: v1(), title: value, completed: false}
        if (value.trim() !== '') {
            setTasks([NewTask, ...tasks])
        } else {
            setError('Field is required!')
        }
        setValue('')
    }

    let filtredTasks = tasks
    if (filter === 'Completed') {
        filtredTasks = tasks.filter(t => t.completed)
    }
    if (filter === 'Uncompleted') {
        filtredTasks = tasks.filter(t => !t.completed)
    }

    const onClickHandler = (tID: string) => {
        setTasks(tasks.filter(el => el.id !== tID))
    }
    const onClickHandlerAll = (value: FilterType) => {
        setFilter(value)
    }
    const onClickHandlerCompleted = (value: FilterType) => {
        setFilter(value)
    }
    const onClickHandlerUncompleted = (value: FilterType) => {
        setFilter(value)
    }
    const changeStatus = (tID: string, checked: boolean) => {
        setTasks(tasks.map(el => el.id === tID ? {...el, completed: !checked} : el))
    }

    return (
        <div className={style.wrap}>
            <h2 className={style.title}>{props.title}</h2>
            <div className={style.input_wrap}>
                <Input value={value} setValue={setValue} addTask={addTask} error={error} setError={setError}/>
                <AddButton name={'ADD'} addTask={addTask} value={value}/>
            </div>
            {error && <div className={style.error}>{error}</div>}
            <ul className={style.list}>
                {filtredTasks.map((el, i) => {
                        return (
                            <li className={style.task} key={i} id={el.id}>
                                <Checkbox checked={el.completed} callBack={() => changeStatus(el.id, el.completed)}/>
                                <span
                                    className={el.completed ? style.task_title + ' ' + style.completed : style.task_title}>{el.title}</span>
                                <button className={style.task_delete} onClick={() => onClickHandler(el.id)}>X</button>
                            </li>
                        )
                    }
                )}
            </ul>
            <div className={style.button_wrap}>
                <button className={filter === 'All' ? style.button_filter + ' ' + style.active : style.button_filter}
                        onClick={() => onClickHandlerAll('All')}>All
                </button>
                <button
                    className={filter === 'Completed' ? style.button_filter + ' ' + style.active : style.button_filter}
                    onClick={() => onClickHandlerCompleted('Completed')}>Completed
                </button>
                <button
                    className={filter === 'Uncompleted' ? style.button_filter + ' ' + style.active : style.button_filter}
                    onClick={() => onClickHandlerUncompleted('Uncompleted')}>Uncompleted
                </button>
            </div>
        </div>
    )
}