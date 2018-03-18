// while
// 조건이 만족하는 동안 반복실행될 코드를 계속 실행
// while( /*조건식*/ ){
//     /* 반복 실행될 코드 */
// }

// continue, break;
// continue : 남은 반복실행될 코드를 모두 skip
// break : 반복문에서 즉시 탈출

console.log("Menu");
console.log("1. Ice Americano");
console.log("2. Ice Caffe Latte");
console.log("3. Capuccino");
console.log("4. Tea");


var count = 0;

while(count < 3){
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
    count++;
  }
console.log("See you again");
