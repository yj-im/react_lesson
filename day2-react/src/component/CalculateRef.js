import React, { useRef, useState } from 'react';
import '../App.css'

function CalculateRef() {
// useState 훅으로 정의한 변수는 상태 변수 => useRef 변경
  // const [first,setFirst] = useState(0)
  // const [second,setSecond] = useState(0)
  const [op,setOp] = useState('')
  const [result, setResult] = useState(0)
  
  // useState로 만든 상태변수를 변경함. V2와 다르게 input 2개입력은 상태변수에서 제외함.
  // 화면을 다시 만들어야 하는 필요성은 연산버튼을 클릭할때 뿐임.
  // useRef 는 상태를 계속 유지하는 방법이 필요할때 state 대신 사용.
  
  // 사용방법 1 - DOM요소를 ref 변수로 지정한다.
  const first =useRef()
  const second =useRef()
  const message=useRef()
  console.log('CalculateRef 리렌더링',first, second)

  const hello=() =>{
    alert('인사🤘🏻'+ message.current.value)
  }
  // 계산 버튼 4개 이벤트
  const handleCalculate = (e) => {
     const sel=e.target.innerHTML
     // useRef 로 만들어진 변수는 current 라는 속성이 있고 이 속성으로 
    // 필요한 데이터를 가져옴. input 요소에 입력된 값을 가져옴.
     const op1=Number(first.current.value)
     const op2=Number(second.current.value)
      setOp(sel)
      // if(a==1)~ else if(a==2)(조건) 같냐고 물어보는 동등조건을 여러번 검사해야할때 switch문 변경.   
      switch (sel) {
        case '+':
          setResult(op1+op2)
          break;
        case '-':
          setResult(op1-op2)
          break;
        case '×':
          setResult(op1*op2)
          break;
        case '÷':
          setResult(op1/op2)
          break;
          // 위의 case 값에 모두 해당되지 않을때.
        default:
          setResult(0)
          break;
      }
  }


  return (
    <div>
          <h3>input 에 ref 활용-v2</h3>
          <p>입력 요소에 상태변수를 사용하지 않고 ref 속성으로 
            Dom 요소 상태 저장함. ref 변수 정의는 useRef 훅(함수)로 함.</p>
          <hr/>
          <input type='text'
                placeholder='첫번째 값을 입력하세요.'
                ref={first}
                // value={first} 
                // onChange={(e) => setFirst(Number(e.target.value))}
          />      
          <span id="op">{op}</span>
          <input type='text'
                placeholder='두번째 값을 입력하세요.'
                ref={second}
                // value={second}
                // onChange={(e) => setSecond(Number(e.target.value))}
          /> 
          <span id="op">=</span>
          <input type='text'
                 value={result} disabled
          />       
          <hr/>     
          <div className="calcBtn">
            <button onClick={handleCalculate}>+</button>
            <button onClick={handleCalculate}>-</button>
            <button onClick={handleCalculate}>×</button>
            <button onClick={handleCalculate}>÷</button>
          </div>
          <div>
            <h4>새로운 입력 요소로 테스트</h4>
            {/* ref 속성에 쓰인 변수는 useRef 로 선언함. */}
            <input type='text' ref={message}/>

            <button onClick={hello}>인사하기</button>
          </div>
    </div>
  )
}

export default CalculateRef;