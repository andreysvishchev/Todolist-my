import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";


type TodolistType = {
    id: string
    title: string
}

export  type TaskType = {
    id: string
    title: string
    completed: boolean
}

export type TasksType = {
    [key: string]: TaskType[]
}

function App() {

    const todolist_1 = v1()
    const todolist_2 = v1()

    const [todolists, setTodolists] = useState<TodolistType[]>([
        {id: todolist_1, title: 'What to learn'},
        {id: todolist_2, title: 'What to buy'},
    ])

    const [tasks, setTasks] = useState<TasksType>({
        [todolist_1]: [
            {id: v1(), title: 'HTML', completed: true},
            {id: v1(), title: 'CSS', completed: true},
            {id: v1(), title: 'JS', completed: false},
            {id: v1(), title: 'React', completed: false},
            {id: v1(), title: 'Redux', completed: false},
        ],
        [todolist_2]: [
            {id: v1(), title: 'Bread', completed: false},
            {id: v1(), title: 'Milk', completed: false},
            {id: v1(), title: 'Sugar', completed: false},
        ]
    })

    function addTask(todolistID: string, value: string) {
        let task = {id: v1(), title: value, completed: false}
        let tasksTodolist = tasks[todolistID]
        tasks[todolistID] = [task, ...tasksTodolist]
        setTasks({...tasks})
    }

    function changeTitle(todolistID: string, title: string) {
        setTodolists([...todolists.map(el => el.id === todolistID ? {...el, title: title} : el)])
    }

    function changeTask(todolistID: string, taskID: string, title: string) {
        setTasks({
            ...tasks,
            [todolistID]: tasks[todolistID].map(el => el.id === taskID ? {...el, title: title} : el)
        })
    }


    return (
        <div className="App">
            {
                todolists.map(tl => {

                    let allTodolistTasks = tasks[tl.id];

                    return (
                        <Todolist
                            key={tl.id}
                            todolistID={tl.id}
                            title={tl.title}
                            task={allTodolistTasks}
                            addTask={addTask}
                            changeTitle={changeTitle}
                            changeTask={changeTask}
                        />
                    )
                })
            }
        </div>
    )
}

export default App;
