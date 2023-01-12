import React from 'react';
import Button from '../Button/Button';
import style from './Form.module.scss';
import { ITasks } from './../../Types/ITask';

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}> {
    state = {
        taskName: "",
        taskTimer: "00:00"
    }

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTasks(oldTasks => [ ...oldTasks, { ...this.state }])
    }

    render() {
        return (
            <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Add a new study
                    </label>
                    <input
                        type="text"
                        name="task"
                        value={this.state.taskName}
                        onChange={event => this.setState({ ...this.state, taskName: event.target.value })}
                        id="task"
                        placeholder="What do you want to study"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Time
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="clock"
                        value={this.state.taskTimer}
                        onChange={event => this.setState({ ...this.state, taskTimer: event.target.value })}
                        id="clock"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <div>
                    <Button type="submit">
                        Adicionar
                    </Button>
                </div>
            </form>
        )
    }
}

export default Form;