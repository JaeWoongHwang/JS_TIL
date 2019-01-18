// 나누어 떨어지는 숫자 배열
// 테스트 값
var arr = [5, 9, 7, 10];
var divisor = 5;
function solution(arr, divisor) {
    var answer = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer[i] += arr[i];
        } else {
            continue;
        }
    }

    if (answer != null) {
        // 배열 정렬
        answer.sort(function (a, b) {
            return a - b;
        });
    } else {
        // 배열에 -1 값 넣기
        var answer = [-1];
    }

    return answer;

}