import React, { useState } from 'react';

function Box() {
    // 값 저장 일반 객체
    // const boxsize ={
    //     width:100,
    //     height:100,
        
    // }
    // boxsize 변수를 상태 변수(size)로 정의. 초기값은 boxsize 입니다.
    const [boxwidth,setWidth]=useState(100)
    const [boxheight,setHeight]=useState(100)
    const [boxleft,setLeft]=useState(100)
    const [boxtop,setTop]=useState(100)

    const handleResize =(e) => {
        switch (e.target.id) {
            case "width_inc":
                setWidth(boxwidth+10)
                break;
            case "width_dec":
                setWidth(boxwidth-10)
                break;
            case "height_inc":
                setHeight(boxheight+10)
                break;
            case "height_dec":
                setHeight(boxheight-10)
                break;
        
            default:
              break;
        }
    }
    const handlePosition =(e) =>{
        switch (e.target.id) {
            case "boxleft":
                setLeft(boxleft-10)
                break;
                case "right":
                    setLeft(boxleft+10)
                break;
                case "boxtop":
                    setTop(boxtop-10)
                break;
                case "boxdown":
                    setHeight(boxtop+10)
                break;
        
            default:
                break;
        }
    }
    
    return (
        // 숙제 : state(상태) 변수이름 : boxleft, boxtop
        <>
        <button onClick={handleResize} id="width_inc">가로+</button>
        <button onClick={handleResize} id="width_dec">가로-</button>
        <button onClick={handleResize}  id="height_inc">세로+</button>
        <button onClick={handleResize}  id="height_dec">세로-</button>
        <button onClick={handlePosition}  id="boxleft">왼-</button>
        <button onClick={handlePosition}  id="right">오-</button>
        <button onClick={handlePosition}  id="boxtop">위-</button>
        <button onClick={handlePosition}  id="boxdown">아래-</button>

            <div id='container'>
                {/* SandBox 렌더링 하기 위해 너비, 높이를 전달해 줍니다. */}
                <SandBox width={boxwidth} height={boxheight} left={boxleft} top={boxtop}/>
            </div>
        </>
    );
}
// 이 파일 안에서만 사용할 컴포넌트
function SandBox(props){
    // 스타일 적용할 객체
    // Box 컴포넌트에서 전해준 너비, 높이를 스타일 객체에 적용 합니다.
    const boxstyle={
        width: `${props.width}px`,
        height:`${props.height}px`,
        left: `${props.left}px`,
        top:`${props.top}px`,
        position:'absolute',
        background:'green'
    }
    return(
        <div style={boxstyle}>

        </div>
    )
}

export default Box;