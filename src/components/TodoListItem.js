/* eslint-disable */
import React from 'react';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';
import cn from 'classnames';
import './TodoListItem.scss';

function TodoListItem ({ todo, onRemove, onToggle, onChangeSelectedTodo,
onInsertToggle,style }) {
    const {id, text, checked} = todo;

    return (
        <div className='TodoListItem-virtualized' style={style}>
            <div className='TodoListItem'>
                <div className={cn('checkbox', { checked })} onClick={ () => onToggle(id) }>
                    { checked ? <FiCheckCircle /> : <FiCircle /> }
                    <div className='text'>{text}</div>
                </div>
                <div className="change" onClick={()=> {
                    onChangeSelectedTodo(todo)
                    onInsertToggle();
                }}>
                    <MdModeEditOutline />
                </div>
                <div className='remove' onClick={ () => onRemove(id) } >
                    <MdDelete />
                </div>
            </div>
        </div>
    );
}

export default TodoListItem;