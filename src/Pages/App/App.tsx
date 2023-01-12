import React, { useState } from 'react';
import Form from '../../Components/Form/Form';
import List from '../../Components/List/List'
import Timer from '../../Components/Timer/Timer';
import style from './App.style.module.scss';
import { ITasks } from './../../Types/ITask';

function App() {
    const [tasks, setTasks] = useState<ITasks[]>([]);

    return (
        <div className={style.AppStyle}>

            <Form
                setTasks={setTasks}
            />

            <List
                tasks={tasks}
            />

            <Timer
            />
            
        </div>
    );
}

export default App;
