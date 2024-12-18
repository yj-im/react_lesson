
import './App.css';

// 함수 컴포넌트        // 다른 방법 : 클래스 컴포넌트
function AppNew() {
  // 자바스크립트 문법으로 데이터를 저장,if,for...기존 메소드....


  // 반드시 부모 요소 1개를 리턴함.
  return (
    <>
      <h3>App 컴포넌트 새로 만들기</h3>
      <hr/>
    </>

  );   // 자바스크립트 함수안에서 태그를 리턴 = JSX 문법이라고함. 
}

// 다른 컴포넌트에서 사용하려면 export default 반드시 지정해줘야함
export default AppNew;
  