var n = 6;
var cores = ["1", "2", "3"];
var answer = 0;

function solution() {

    for (var i = 0; i < cores.length; i++) {

        var temp = n - cores[i];

        if (temp <= 0) {
            answer = i;
            break;
        } else {
            n = temp;
            continue;
        }
    }
    return answer;

}

solution();

console.log("answer" + answer);
