// 두 정수의 합
var a = 3;
var b = 4;

function solution(a, b) {

    var answer = 0;
    if (a > b) {
        //a가 클때
        for (var i = b; i <= a; i++) {
            answer += i;
            continue;
        }
    } else if (a < b){
        //b가 클때
        for (var i = a; i<=b; i++){
            answer += i;
            continue
        }
    } else{
        //둘이 같을때
        answer = a;
    }
    
    return answer;
}