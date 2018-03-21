// Arithematic operator
// 이항연산자 (binary operator)
// 두개의 피연산자(A, B)를 가지는 연산자. A 연산자 B 의 꼴로 사용함. 피연산자는 변수나 숫자가 될 수 있음.
//
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지

// 단항연산자 (unary operator)
// 하나의 피연산자(A)를 가지는 연산자. 보통 연산자A의 꼴로 사용함. 대표적으로 - 연산자가 있으며,
//-A의 꼴로 사용하는 경우 -는 이항 연산자가 아닌, 단항연산자임. A변수에 -1을 곱한 효과가 발생.

// 증감연산자 (++, --)
// 표현식 안에서 변수의 값을 증가하거나 감소시킬 수 있음.
// 각각, A=A+1, A=A-1의 효과를 발생함. 연산자를 변수 앞에 사용한 경우와 변수 뒤에 사용한 경우에 따라
// 변수의 값을 업데이트 하는 순서가 바뀜.
var a = 1;
console.log(a);
console.log(a-1);
console.log(a);
//실행되기 전 증가
console.log(++a);
console.log(a);
//실행된 후 증가
console.log(a++);
console.log(a);
//Math 관련 명령어
Math.pow(A,b) : A의 B승을 구해 줌
Math.sqrt(A) : A의 제곱근을 구해 줌
Math.random() : 0~1 사이의 임의의 난수를 발생시켜 줌
