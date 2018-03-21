// for in - 객체의 각 엘리먼트에 접근할 수 있는 반복문
// 객체의 속성에 접근 하는 방법
// - Object.keys(변수명);
// - 객체의 속성 명들로 변수가 하나 생성 됨
// - 절차가 추가적으로 발생하는데 for in은 이런 절차를 생략할 수 있음
var obj = {
  name: "test",
  weight: 30,
  isObject: true,
  arr:[1,2,3],
  obj:{property:1}
};

console.log("For 구문으로 Object Property 반복하기");

var property_list = Object.keys(obj);
console.log("Property List : " , property_list );

for(var i  = 0; i < property_list.length; i++){
  var propertyName = property_list[i];
  console.log("\t", propertyName, ":", obj[propertyName]);
}

console.log("\n\n For in 구문으로 Object Property 반복하기");
for(var propertyName in obj){
 console.log("\t", propertyName, ":", obj[propertyName]);
}
// for in 구분은 증감식, 초기화 식이 없지만 in 앞의 변수에
// in 뒤의 객체의 속성의 이름을 순차적으로 넣어줌
// for in 구문은 배열에도 적용가능. 이떄는 변수에 배열의 인덱스가 저장되게 됨
// in은 연산자로써 동작하는데, 해당 속성의 이름이 객체에 존재하느냐를 검사하고 t/f로 리턴 
