// 배열의 정의
var arr = [];
var arr2= [1,2,3,4,5];
// 자료형이 섞여도 배열의 정의가 가능
var mixed_arr = {1, true, 3.14, "string", {name: "object"}, [1,2,3]};
console.log arr2[3];

// 배열에 엘리먼트를 추가하거나 삭제하는 코드
// 기본적으로 배열의 앞과 뒤에서 엘리먼트를 추가하거나 삭제할 수 있음.
//
// .push(element) : 배열의 뒤에 엘리먼트 추가
// .pop() : 배열의 뒤에서 엘리먼트 삭제하고 리턴
// .shift() : 배열의 앞에서 엘리먼트 삭제하고 리턴
// .unshift(element) : 배열의 앞에 엘리먼트 추가
//
// 배열 붙이기, 검색하기
// arr1.concat(arr2) : arr1과 arr2 붙임
// arr.indexOf(element) : arr에서 element가 있는 첫 위치를 검색
// arr.lastIndexOf(element) : arr에서 element가 있는 마지막 위치를 검색
