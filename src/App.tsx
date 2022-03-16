import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {StateType} from "./state/state";




type AppType = {
    state: StateType[]
}



function App(props: AppType) {


    return (
        <div className="App">

            <Todolist state={props.state} title='Что сделать сегодня'/>
            <Todolist state={props.state} title='What to Learn?'/>


        </div>
    );
}

export default App;
