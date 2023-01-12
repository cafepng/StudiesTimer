import { ITasks } from '../../Types/ITask';
import Item from './Item/Item';
import style from './List.module.scss';

function List({ tasks }: { tasks: ITasks[] }) {
    return (
        <aside className={style.listTasks}>
            <h2> Task List</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                    />
                ))}         
            </ul>
        </aside>
    )
}

export default List;