import style from '../List.module.scss';

export default function Item({ taskName, taskTime }: { taskName: string, taskTime: string }) {
    return (
        <li className={style.item}>
            <h3> {taskName} </h3>
            <span> {taskTime} </span>
        </li>
    )
}