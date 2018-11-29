#### HTML5 & CSS Lecture at T Academy

> Memo

- Anchor Tag

  - a 태그에서 링크를 누르면 바로 화면 전환이 일어난다.(디폴트 속성 target="self") 만일 새 탭에서 링크 화면을 열고 싶다면 target="_blank"라는 속성을 a 태그 안에 정의한다.

- CSS 적용 우선 순위

  1. !important 속성
  2. HTML에서 style을 직접 지정한 속성
  3. #id로 지정한 속성
  4. .클래스, :추상클래스로 지정한 속성
  5. 태그이름으로 지정한 속성
  6. 상위 객체에 의해 상속된 속성

    => 같은 우선 순위에 있는 경우, 부모-자식 관계가 많은 경우가 우선되며, 모든 설정이 같은 경우 나중에 선언한 것이 우선되어 적용된다.

- HTML Input Attributes

  - value :  입력필드에 대한 초기값을 지정
  - readonly: 입력필드가 읽기전용임을 지정
  - disabled: 입력필드가 사용불가임을 지정(사용할 수 없고, 클릭할 수 없다. disabled 요소는 제출되지 않는다.)
  - size: 입력 필드의 크기(문자들)를 지정한다.

- HTML Input Attributes

  - autocomplete : 폼이나 입력필드가 자동완성 기능을 지원할 지 여부를 지정
    autocomplete 가 on이면 브라우저는 사용자가 이전에 입력한 값들에 기초하여 자동으로 완성한다.(반대는 off)

  - novalidate : <form>속성, 제출 시에 데이터의 유효성 검사를 하지 않도록 지정

  - autofocus : 페이지가 로드 될 때 자동적으로 해당 input 요소가 초점을 받도록 한다.

    ~~~
    <input type="text" name="frame" autofocus>
    ~~~
