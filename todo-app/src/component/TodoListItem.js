import React from 'react';
import './TodoListItem.scss'
function TodoListItem() {
    return (
        <div className='TodoListItem'>
            <input type='checkbox' className='checkbox'></input>
            <input type='checkbox' className='checkbox'></input>
            <input type='checkbox' className='checkbox'></input>
        </div>
    );
}

export default TodoListItem;