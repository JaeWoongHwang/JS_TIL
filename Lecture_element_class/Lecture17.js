// switch( /*비교할 값*/ ){
//     case /*값1*/:
//         /*비교할 값이 값1인 경우 실행될 코드*/
//         break;
//     case /*값2*/:
//         /*비교할 값이 값2인 경우 실행될 코드*/
//         break;
//
//     /*
//     ... 여러개의 case
//       */
//
//     default:
//         /*비교할 값이 위의 모든 값과 다른 경우 실행될 코드*/
//         break;
// }

// break
// break구문을 만나면, switch-case 문의 마지막 중괄호(}) 밖으로 빠져나옴.
//
// break를 사용하지 않으면, switch문에서 빠져나오지 않고 다음 case에 해당하는 코드까지 실행됨.
console.log("Menu");
console.log("1. Ice Americano");
console.log("2. Ice Caffe Latte");
console.log("3. Capuccino");
console.log("4. Tea");

var choice = parseInt(prompt("Please choose the menu"));
switch (choice) {
  case 1:
    console.log("A cup of Ice Americano is 1.5 dollars");
    break;
  case 2:
    console.log("A cup of Ice Caffe Latte is 2 dollars");
    break;
  case 3:
    console.log("A cup of Capuccino is 2 dollars");
    break;
  case 4:
    console.log("A cup of Tea is 3 dollars");
    break;
  default:
    console.log("The menu is not exist");
    break;
}
