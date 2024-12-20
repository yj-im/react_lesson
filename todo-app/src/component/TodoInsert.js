import React, { useState } from 'react';
import './TodoInsert.scss'
import { MdAdd } from 'react-icons/md';

function TodoInsert({onInsert}) {
    const [value, setValue] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()      // form 제출 기본 동작을 못하게 막음.
        // 입력값을 할일 목록(배열)에 추가시키는 함수 실행.
        onInsert(value)
        //   ㄴ 부모 컴포넌트에서 프롭으로 받음
        // 입력하고 화면 비워줌
        setValue('')
    }
    return (
        // form은 동기적 통신 방식. form 안의 input은 엔터누르면 submit됨
        // => 인풋에서 엔터를 누르면 특정함수 실행하도록 onSubmit 처리함수 작성 
        // onsubmit안하면 엔터쳣을때 주소창에 ? 생김 서버로 데이터 갔다는말
            <form className='TodoInsert' onSubmit={handleSubmit}>
                {/* value={value}랑 setValue 같이써야함. */}
                <input placeholder='할 일을 입력하세요.' value={value} onChange={(e)=>setValue(e.target.value)}/>
                {/* 버튼 클릭은 submit => handleSubmit 함수 실행 */}
                <button type='submit'>
                    <MdAdd/>
                </button>
            </form>
      
    );
}

 export default TodoInsert;