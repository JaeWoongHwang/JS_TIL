// 객체 정의는 중괄호{}를 사용하여 정의
// 객체는 속성의 집합
var temp_obj = {};
typeof(temp_obj);

var man = {name: "Michael", age:20, height:180};
console.log(man);

// 객체의 속성에 접근하는 방법
// 1. 객체이름.속성이름 ex) man.name
// 2. 객체이름["속성이름"] ex) man["name"]
man.name
man["age"]
// 객체 속성 변경
man.name = "Mark";
man["age"] = 15;
