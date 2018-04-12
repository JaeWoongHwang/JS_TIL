// var sum = 0;
//
// // 1~50까지의 합
// for(var i = 0; i<=50; i++){
//   sum += i;
// }
//
// // 코드 사이에 1~5의 값을 출력하는 코드를 삽입하고자 함
// // 이럴때 익명함수를 통해 코드의 범위를 구분짓고 바로 호출해서 일회용으로 사용할 수 있음
// (function(){
//   for(var i = 1; i<=5; i++){
//   console.log(i);
//   }
// })();
//
// for(; i<=100; i++){
//   sum += i;
// }
//
// console.log(sum);

function callback(){
  console.log("timeout");
}
setTimeout(callback, 3000);

// 위의 코드를 익명함수를 통해 간략하게 변경 가능
setTimeout(
    function(){
      console.log("timeout");
    },
  3000);
