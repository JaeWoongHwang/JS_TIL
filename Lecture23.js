// 변수의 scope - 선언 된 변수가 어느 위치에서 유효한 가

function a(){
  var v_a = "a";

  function b(){
      var v_b = "b";
      console.log("b : ", typeof(v), typeof(v_a), typeof(v_b));
  }
  b();
  console.log("a : ", typeof(v), typeof(v_a), typeof(v_b));
}

var v = "v";

a();

console.log("o : ", typeof(v), typeof(v_a), typeof(v_b));

// 자바스크립트 변수의 scope는 function의 scope를 따른 => 객체는 선언된 함수 안에서만 접근 가능하다
