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

- 테이블 태그 : 테이블 태그는 과거에는 웹 문서의 전체적인 레이아웃을 만들 때 많이 사용되었으나, 웹 표준 시대에는 <u>회원가입, 게시판, 설문조사</u> 등에 사용된다.

- 폼 태그
  - action: 데이터를 어디로 보낼 지 url 정보
  - method :  데이터 전송 방식을 구분
    - get 방식 : 데이터가 url 뒤에 붙어서 전송 / 보안에 취약
    - post 방식 : 데이터가 암호화 되어서 전송 / 중요한 데이터는 post 방식으로 전송해야 한다.

- 페이지 레이아웃 설정 태그
  - 블록 태그타입 : 블록 요소는 개행이 자동으로 됨 ex) <p>, <li>
    - division 태그
      - 블록 타입의 대표적인 태그
      - 웹 문서의 레이아웃을 설정하는 용도로 사용한다.
  - 인라인 태그 타입 : 옆으로 요소들이 따라 붙는 타입 ex) <img>
    - span 태그
      - 인라인 타입의 대표적인 태그
      - 웹 문서에서 특정한 의미를 나타내지는 않는다.

- 시멘틱 태그 : 검색 엔진이 보다 효율적으로 데이터를 검색할 수 있게 특정 태그를 사용해서 웹 문서를 제작하는 것을 시멘틱 웹이라고 한다.
  - 시멘틱 주요태그 (검색을 위한 권장 사항, 필수적 요소 아님)
    - header : 페이지의 헤드 영역
    - footer : 페이지의 하단 영역
    - nav : 페이지의 네비게이션 영역
    - section: 페이지의 내용
    - article : section과 유사하며, 글 또는 어떠한 내용 출력
    - aside : 부가적인 내용

- embed 태그

  - 멀티미디어 요소 삽입 태그, html5에선 많이 사용하지 않는 추세 => audio / video 태그 많이 사용
  - 속성
    - src
    - width
    - height
    - autostart : 자동실행 여부(true/false)

- audio 태그
  - 오디오 태그를 사용하면 웹 문서에 음악을 삽입할 수 있다.
  - 오디오 태그에는 다양한 속성이 있다.
  - 속성
    - scr
    - controls: 컨트롤러 출력 controls="controls" (true/false가 아님 컨트롤러를 빼고 싶다면 속성값 자체를 제거)
    - autoplay
    - loop  : 반복 실행
- video 태그
  - 비디오 태그를 사용하면 웹 문서에 영상을 삽입할 수 있다.
  - 속성
    - type :  재생매체 타입 type="video/mp4"
    - controls
    - autoplay
    - loop

- 두 줄 이상일 경우 말줄임 CSS

~~~
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2; /* 텍스트 라인 수 */
-webkit-box-orient: vertical;
word-wrap: break-word; /* 강제로 끊어서 줄바꿈 */
line-height: 1.2em;
height: 2.4em /* line-height가 1.2em이고 2라인을 자르기 때문에 height는 line-height * 라인의 수 1.2em * 2 = 2.4em

~~~

