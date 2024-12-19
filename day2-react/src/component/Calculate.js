import React, { useState } from 'react';

function Calculate() {
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
            <input type='text' 
            placeholder='두번째 숫자 입력하세요' 
            value={secondnumber} onChange={(e)=>setSecondNumber(e.target.value)}></input><br/>
            <p>={result}</p>
            <button onClick={plus}>＋</button>
            <button onClick={minus}>－</button>
            <button onClick={multiply}>×</button>
            <button onClick={devide}>÷</button>
        </div>
    );
}

export default Calculate;