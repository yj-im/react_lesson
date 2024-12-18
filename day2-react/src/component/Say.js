import { useState } from "react"    
import React from "react"       // export default 이면 { } 표시 없음.

// 교재 112페이지
function Say() {
    // message 변수는 상태변수. 값을 변경하려면 useState 가 리턴한 setXXX 메소드 실행해야 함. -> 재렌더링
    const [message, setMessage]=useState('test')
    // useState() 인자로 message 상태변수의 기본값을 설정함.

    const [color, setColor]= useState('green')
    // function 키워드는 함수 컴포넌트에만 사용하고 
    // 인자로 전달할 함수는 화살표 함수로 하겠음.
    const handleEnter = (e) => {
        // 이벤트 정보 저장하는 인자 e는 필요시에만 정의함.
        setMessage('환영합니다')
        
    }   
     const handleSkyBlue = (e)=>{
        setColor('skyblue')
        //color 상태변수니까 setColor
    }
    const handleOrange = (e)=>{
        setColor('orange')
    }
    const handlePink = ()=>{
        setColor('pink')
    }
   
    
    const handleOut = (e) => {
        // 이벤트 정보 저장하는 인자 e는 필요시에만 정의함.
        // message = '어서 가세요'
        setMessage('Good Bye!!')

        
    }   
    // onClick 속성값은 이벤트 처리 함수가 되어야 함. 
    // JSX 문법 안에서는 {} 자바스크립트 코드값 (변수, 수식, 함수, 객체, 배열, 문자열, number...) 작성
    // JSX 문법에선 for, if문 못써서 map 쓰고 한거임
    return (
        <div>
            <button onClick={handleEnter}>입장</button>
            <button onClick={handleOut}>퇴장</button>
            <h3 style={{color:color}}>{message}</h3> 
            {/* 스타일 안에 파란색 중괄호는 값, 노란색 중괄호는 객체라는 뜻 */}
            {/* 버튼 3개를 만들어서 어떤 버튼 클릭이냐에 따라 h3 색상 변경 */}
            <button onClick={handleSkyBlue}>스카이블루</button>
            <button onClick={handleOrange}>오렌지</button>
            <button onClick={()=>setColor('pink')}>핑크</button>
        </div>
         )
}

export default Say;