import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

function TodoList({ todos, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle }) {
    const rowRenderer = useCallback(({ index, key, style }) => {
        const todo = todos[index];
        return (
            <TodoListItem 
                todo={todo} 
                key={key} 
                onToggle={onToggle} 
                onRemove={onRemove}
                onInsertToggle={onInsertToggle}
                onChangeSelectedTodo={onChangeSelectedTodo} 
                style={style} 
            />
        )
    }, [ todos, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle ]);
    return ( 
        <div className='TodoList'>
            <List className='TodoList'
            width={510}
            height={513}
            rowCount={todos.length}
            rowHeight={60}
            rowRenderer={rowRenderer}
            list={todos}
            style={{ outline: "none" }}
            /> 
        </div>
    );
}

export default TodoList;