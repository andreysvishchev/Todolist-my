import React, {useState} from "react";
import style from "./Todolist.module.css";
import {Checkbox} from "./components/Checkbox";
import {TaskType} from "./App";
import {AddedForm} from "./components/AddedForm";
import {EditableSpan} from "./components/EditableSpan";


type TodolistType = {


    todolistID: string
    title: string
    task: TaskType[]
    addTask: (todolistID: string, value: string) => void
    changeTitle: (todolistID: string, title: string) => void
    changeTask: (todolistID: string, taskID: string, title: string,) => void
}

type FilterType = 'All' | 'Completed' | 'Uncompleted'


export const Todolist = (props: TodolistType) => {

    let [filter, setFilter] = useState<FilterType>('All')


    let filtredTasks = props.task
    if (filter === 'Completed') {
        filtredTasks = props.task.filter(t => t.completed)
    }
    if (filter === 'Uncompleted') {
        filtredTasks = props.task.filter(t => !t.completed)
    }


    const addTaskForTodolist = (value: string) => {
        props.addTask(props.todolistID, value)
    }


    const onClickHandler = (tID: string) => {
        /*        setTasks(tasks.filter(el => el.id !== tID))*/
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
        /*        setTasks(tasks.map(el => el.id === tID ? {...el, completed: !checked} : el))*/
    }


    const changeTodolistTitle = (title: string) => {
        props.changeTitle(props.todolistID, title)
    }
    const changeTaskTitle = (taskID: string, title: string) => {
        props.changeTask(props.todolistID, taskID, title)
    }


    return (
        <div className={style.wrap}>
            <EditableSpan title={props.title} changeTitle={changeTodolistTitle}/>
            <div className={style.input_wrap}>
                <AddedForm addTitle={addTaskForTodolist}/>
            </div>

            <ul className={style.list}>
                {filtredTasks.map((el) => {
                        return (
                            <li className={style.task}
                                key={el.id}
                                id={el.id}>
                                <Checkbox checked={el.completed} callBack={() => changeStatus(el.id, el.completed)}/>
                                <EditableSpan title={el.title} changeTitle={(title) => changeTaskTitle(el.id, title)}/>
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