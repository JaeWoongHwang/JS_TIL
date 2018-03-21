// - 변수의 Shadowing
// 함수 안에서 밖에서도 선언되었던 같은 이름의 변수를 사용하는 경우
//
// 함수 밖의 변수는 잠시 가려짐 (shadowing)
// 함수 안에서는 해당 함수에서의 변수를 사용 (함수 밖 변수의 값은 변하지 않음)
// 함수에서 빠져나오면 다시 해당 변수에 접근할 수 있음
// 함수 안에서만 값이 유지되어야 하는 경우
//
// 함수 안에서 var 키워드를 사용해 선언하고 사용
// 여러 함수에서 값이 유지되면서 사용되는 변수의 경우
//
// 함수를 포괄하는 곳에서 선언하고 사용

// function name{
// // 한 함수 안에서만 값이 유지되는 변수
//  var in_function_var;
// }

// 여러 함수에서 값이 유지되면서 사용되는 변수
// var out_function_var;


function shadowing_example() {
  console.log("F", val);
  val ++;
}

var val  = 0;
shadowing_example();
console("0", val);
