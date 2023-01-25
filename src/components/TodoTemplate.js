/* eslint-disable */
import { children } from 'react';
import './TodoTemplate.scss';


function TodoTemplate({ children }) {
    // const todos = useTodoState();
    // const undoneTasks = todos.filter(todo => !todo.done);
    // console.log({value});
    // const dateString = value.toLocaleDateString('ko-KR',{
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric'
    // });
    // const dayName = value.toLocaleDateString('ko-KR', {
    //     weekday: 'long'
    // });
    return (
        <div className='TodoTemplate'>
            <div className='app-title'>To do List</div>
            {/* <div className='dete'>
                <div>{dateString}</div>
                <div>{dayName}</div>
            </div> */}
            <div className='content'>{ children }</div>
        </div>
    );
}

export default TodoTemplate;