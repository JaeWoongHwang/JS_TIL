### JSON : Javascript Object Notification
- 자바스크립트의 객체를 문자열로 표현하는 방법
  - 프로그램간에 전달하기 편리 (서버 -> 브라우저)

#### JSON API
- JSON.stringify( object )
  ~~~
  var pi = 3.14
  var str = "string"
  JSON.stringify(pi);
  JSON.stringify(str);
  ~~~
  - 인자로 받은 객체를 JSON 문자열로 반환함
- JSON.parse( sring )
  - 인자로 받은 문자열을 Javascript Object로 변경해 반환함
~~~
var original_obj = { pi:3.14, str:"string" };

var json_str = JSON.stringify( original_obj );
// 반환 문자열 : {"pi":3.14,"str":"string"}

var parsed_obj = JSON.parse( json_str );

console.log( original_obj ); // {pi: 3.14, str: "string"}
console.log( parsed_obj ); // {pi: 3.14, str: "string"}
~~~
~~~
var arr = [
  "string", 3.14, true, null, undefined, function a(){console.log("method")}
]
var t = JSON.stringify(arr);  
~~~
- JSON은 JavaScript는 객체에 담긴 데이터만 문자열로 변환
- undefined, function 은 변환되지 않음에 주의!
- JSON을 이용하면 특정 데이터를 문자열 형태로 받은다음 JavaScript Obj로 변환해서 자유롭게 활용할 수 있음
- 이는 개발을 쉽게 해주고 브라우저에서 서버로 데이터를 전송할 떄, 서버에서 데이터를 받아올 때 JSON 형태로 많이 전송하고 있음
