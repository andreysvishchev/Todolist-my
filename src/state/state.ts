import {v1} from "uuid";

export type StateType = {
    id: string
    title: string
    completed: boolean
}

export const state: StateType[] = [
    {id: v1(), title: 'HTML', completed: true},
    {id: v1(), title: 'CSS', completed: true},
    {id: v1(), title: 'JS', completed: false},
    {id: v1(), title: 'React', completed: false},
    {id: v1(), title: 'Redux', completed: false},
]