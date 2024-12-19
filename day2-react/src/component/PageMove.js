import React, { useState } from 'react';

// 버튼 2개로 페이지 번호를 앞,뒤로 이동
// state 변수 1개
function PageMove({last=3}) {
   // 전체 페이지 개수로 last 값 설정. 부모컴포넌트에[서 전달]
    // const last ='8'
    const [pageno,setPageno]=useState(1)
    
    const left = (e) =>{
         setPageno(pageno-1)
        }
      const right = (e) =>{
            setPageno(pageno+1)
        }
    return (
        <div>
            <h2>상태 변수값을 button 속성 설정에 활용</h2>
            <p>페이지 번호:{pageno}</p>
            <button onClick={left} disabled={pageno==1}>＜</button>
            <button onClick={right} disabled={pageno==last}>＞</button>
        </div>
        // 버튼 2개로 페이지 번호를 앞,뒤로 이동
        // state 변수 1개
    );
}

export default PageMove;