import React, { useRef, useState } from 'react';

function CounterRef() {
    // 사용방법 2 - 순수 데이터 저장할 일반 변수를 useRef로 선언
    const [count, setCount]= useState(10)
    const countRef = useRef(2)


    const handleCount=() =>setCount(count+1)
    const handleCountRef=() =>countRef.current+=1
    
    // console.log('CounterRef 렌더링 :',countRef)
    return (
        <div>
            <p>state 카운터 : {count}</p>
            <p>ref 카운터 : {countRef.current}</p>
            <button onClick={handleCount}>state 카운트</button>
            <button onClick={handleCountRef}>ref 카운트</button>
            {/* 돔요소가아니라 순수데이터니까(useRef로 만든 변수) .current, 만약 dom에서 가져오는거면
            .current.value */}
        </div>
    );
}

export default CounterRef;