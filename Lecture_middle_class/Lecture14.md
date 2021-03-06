## 예외처리의 필요성
프로그램의 외부 요인으로 프로그램의 특정 파트가 정상적으로 동작하지 않을 수 있으나, 에러처리를 이용하면 프로그램이 정상적으로 실행될 수 있음

### Try, Catch, Finally 구문
~~~
try{
    // 정상적으로 실행되는 경우 실행될 프로그램 작성
    // try 블록안에서 에러가 발생한 경우 catch 블록으로 이동함
}
catch(e){
    // try 블록에서 에러가 발생한 경우
    // 에러를 인자 e로 받아 에러를 처리하는 코드를 작성
}
finally{
    // try, catch구문이 실행되고 나서 실행될 코드
}
~~~
- try 구문 안에서 호출한 함수 안에서 에러가 발생한 경우에도 catch로 이동해 프로그램이 실행됨

### 에러 발생시키기
- throw 명령 사용 : return 구문과 비슷하게 에러를 나타낼 수 있는 인자를 사용
  - 문자열, 숫자, 객체 등 javascript object를 자유롭게 활용 가능

### 에러 처리 과정
- throw 발생 시, catch 구문을 찾아서 이동하게 됨
  - 현재의 블록에서 catch, finally 구문이 없다면 상위 블록, 상위 함수(호출된 함수)로 이동
  - try, finally 구문만 존재시, finally 구문은 실행되고, catch 될 수 있는 구문을 찾아 이동함
  - catch 구문을 찾으면 에러가 처리되고 해당 try, catch 구문 이후 코드가 실행됨
