var arr = [4, 3, 2, 1];

function inspector(arr) {
    var answer = [];
    if (arr.length < 1) {
        arr.sort(function (a, b) {
            var sortResult = a - b;
        });

        for (var i = 0; i < sortResult.length; i++) {
            answer[i] = sortResult[i];
        }
    } else {
        answer[0] = 1;
    }
    console.log(answer);
    return answer;
}