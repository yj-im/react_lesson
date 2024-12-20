import React, { useState } from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';
import TodoListItem from './component/TodoListItem';


// 추가 패키지 설치 : yarn add sass / yarn add react-icons
function App() {
    const initVal=[
        {
            id:1,
            text: '리액트 수업 복습.',
            checked: true
        },
        {
            id:2,
            text: '리액트 프로젝트 기획.',
            checked: true
        },
        {
            id:3,
            text: '데이터베이스 테스트.',
            checked: true
        },
    ]
    const [todos,  setTodos]=useState(initVal)
    console.log('todos',todos)
    // todos 에 할일 객체를 추가
    const handleInsert=(text)=>{
        const todo ={
            id:todos.length+1,
            text,
            checked:false
        }
        // todos에 새로운 todo를 추가해서 변경함. 
        setTodos(todos.concat(todo))
    }
    return (
        <>
        <button onClick={()=>handleInsert('테스트할일')}>할일 추가</button>
        <div>
            <TodoTemplate>
                    <TodoInsert onInsert={handleInsert}/>
                    <TodoList>
            <TodoListItem/>
            </TodoList>
                   
            </TodoTemplate>
            <hr/>
            
          
            
        </div>
        </>
    );
}

export default App;