import React, { useState } from 'react';

function InputState() {
    // 상태 변수 username 과 nickname 값이 변경되면 리렌더링
  


    // useState 훅으로 정의한 변수는 상태 변수
    const [username,setUsername] = useState('')
    const [nickname,setNickname] = useState('')

    // 상태 변수 username 또는 nickname 값이 변경되면 리렌더링.콘솔 출력
    console.log('리렌더링',username, nickname)

    // OK 버튼 이벤트
    const handleOk = ()=>{
    alert(`${username} : ${nickname}`)
    setUsername('')
    setNickname('')
    }
    // 닉네임  Input 이벤트
    const handleNickKeydown =(e) => {
        if(e.key === 'Enter')
            handleOk()
    }
    return (
        <div>
            <h1>input 에 state 변수 활용</h1>
            <p>input value에 상태변수를 적용하면 onChange 이벤트 꼭 필요함.</p>
            <hr/>
            <input type='text'
                    placeholder='사용자 이름 입력하세요.'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
            <input type='text'
                    placeholder='사용자 닉네임 입력하세요.'
                    value={nickname}
                    onKeyDown={handleNickKeydown}
                    onChange={(e)=>setNickname(e.target.value)}
                    />
                    <button onClick={handleOk}>입력완료</button>
                    <div>
                        이름 : {username}, 닉네임 : {nickname}
                    </div>
        </div>
    );
}

export default InputState;