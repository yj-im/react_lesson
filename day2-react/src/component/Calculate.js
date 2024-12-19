import React, { useState } from 'react';

function Calculate() {
    // useState 함수로 만들어진 상태변수는 값이 바뀔 때마다 
    // 모든 변수값이 새로 계산되고 그 값으로 재렌더링 함.
    // 단, 상태변수는 이전값 (상태)는 유지됨. 
     const [firstnumber, setFirstNumber]=useState()
     const [secondnumber, setSecondNumber]=useState()
    const [result,setResult]=useState()

    console.log(firstnumber,secondnumber)
  
    
    const plus = () => {
        setResult(Number(firstnumber)+Number(secondnumber))
    }
    const minus = () =>{
        setResult(firstnumber-secondnumber)

      
    }
    const multiply = () =>{
        setResult(firstnumber*secondnumber)

       
    }  

    const devide = () =>{
        setResult(firstnumber/secondnumber)

       
    }  

    
    return (
        <div>
            <input type='text' 
            placeholder='첫번째 숫자 입력하세요' 
            value={firstnumber} onChange={(e)=>setFirstNumber(e.target.value)}></input>
            {/* e.target은 첫번쨰 숫자 입력하는 input */}
            <input type='text' 
            placeholder='두번째 숫자 입력하세요' 
            value={secondnumber} onChange={(e)=>setSecondNumber(e.target.value)}></input><br/>
            {/* e.target은 두번쨰 숫자입력하는 input */}
            <p>={result}</p>
            <button onClick={plus}>＋</button>
            <button onClick={minus}>－</button>
            <button onClick={multiply}>×</button>
            <button onClick={devide}>÷</button>
        </div>
    );
}

export default Calculate;