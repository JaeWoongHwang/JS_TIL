## Javascript의 this 개념

### this 키워드

- `this`는 '나'라는 단어와 비슷한 개념
- `this`의 값은 `this`를 사용하는 해당 함수를 **어떻게** 실행하느냐에 따라 바뀜
- 자바스크립트에서 함수를 실행하는 방법엔 크게 4가지
  - 해당 함수를 이 4가지중 어떤 방식으로 실행하느냐에 따라 `this`의 값은 바뀜

### Regualr function call  - 일반 함수 실행 방식

#### 1-1 non-strict mode(일반모드)

- `this`의 값은 글로벌 객체, 즉 window 객체

~~~javascript
funtion trick(){
  console.log(this); // 'this' == global object (브라우저에선 window 객체)
}

trick()
~~~

 #### 1-2. strict mode

- strict mode
  - 코드에 더 나은 오류 검사를 적용하는 방법. strict 모드를 사용하면, 예를 들어 암시적으로 선언한 변수를 사용하거나 읽기 전용 속성에 값을 할당하거나 확장할 수 없는 개체에 속성을 추가할 수 없음
  - 더 엄격하게 코드를 검사하는 방법 -> 이를 통해 개발자는 더 손쉽게 디버깅을 할 수 있음


- `this`의 값은 undefined

~~~javascript
'user strict';
var name = "fake";

funtion trick(){
  console.log(this.name); // this == undefined
}

trick();
~~~

#### 1-3 Another Case

~~~javascript
var age = 100;

function info(){
  var age = 90;
  bar();
}

function bar(){
  consolo.log(this.age);
}

info();
~~~

### Dot notation
  - 점 방식
  - Dot notation을 이용해 함수를 호출하는 경우, 해당 함수 내부의 this는 점 앞에 있는 객체를 가리킴

#### Example
~~~
//Example 1.
var age = 100;

var ken = {
  age: 35,
  foo: function foo () {
    console.log(this.age);
  }
};

ken.foo(); // ?
~~~

~~~
//Example2
function foo () {
  console.log(this.age);
}

var age = 100;

var ken = {
  age: 35,
  foo: foo
};

var wan = {
  age: 31,
  foo: foo
};

ken.foo(); // ?
wan.foo(); // ?
~~~

~~~
Example3
var age = 100;

var ken = {
  age: 35,
  foo: function bar () {
    console.log(this.age);
  }
};

var wan = {
  age: 31,
  foo: ken.foo
};

var foo = ken.foo;

ken.foo(); // ?
wan.foo(); // ?
foo(); // ?
~~~
