import React from 'react';

// props 는 객체. 프로퍼티들이 부모 컴포넌트에서 속성으로 전달되면
//                그 값들을 저장하기 위해 인자로 정의(props)함.
function MyComponentProps(props) {
    // 객체.프로퍼티, 객체.메소드()
    const title ={
        padding: '10px',
        color:props.color
    }
    console.log('MyComponentProps props:',props)
    // 받는쪽 :props 객체는 title, content, color  프로퍼티값을 저장하도록 함.
    // 값을 주는쪽 :부모 컴포넌트가 값을 저장
    return (
        <div className='box'>
            <h3 style={title}>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

export default MyComponentProps;