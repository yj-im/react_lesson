import '../css/MyStyle.css'

// export default를 function 앞에서 저장할수 있음
// 이 파일에 함수 1개밖에 없어서 같이 사용함
export default function MyComponent(){
    // 스타일 정의 객체
    const title= {
        padding : '10px',
        color:'skyblue'
    }
    // 스타일 이름은 background-color 는 backgroundColor 로 모두 바꿔서 씀
    return(
        // MyStyle.css 파일에 정의된 스타일 지정하기. 클래스 이름 box
        <div className='box'>
            <h3 style={title}>첫번째 컴포넌트 테스트</h3>
        <p style={{backgroundColor: 'beige',margin: '10px'}}>1. CSS 스타일을 태그 안에서 정의하기(인라인 스타일)</p>
        <p>2. 인라인 스타일을 객체로 정의하여 변수 활용하기 - 예시로 title 변수</p>
        <p>3. CSS 파일 import</p>
        </div>
    )
      
}

