try{
// 정상적으로 실행되는 경우 실행될 프로그램 작성
  console.log("try-1");
  throw "Test catch error";
  console.log("try-2");
}
catch(e){
// try블록에서 에러가 발생한 경 에러를 e인자로 받아 에러를 처리하는 코드로 구성
  console.log("catch error : ", e);
}
finally{
// try, catch구문이 실행되고 나서 실행될 코드
// 항상 마지막에 실행 될 구문
  console.log("finally - this code will always be executed");
}
