### Document API
- DOM API를 활용해 문서에서 엘리먼트를 선택하는 방법
- document.getElementBy~ : 단일 엘리먼트를 선택하는 메소드
- document.getElementsBy~ : 다중 엘리먼트를 선택하는 메소드
- document.getElementById 메소드
- 인자로 HTML element 태그의 id를 전달하면 해당 엘리먼트가 반환됨
### Element API
- .innerHTML 속성
엘리먼트 안의 HTML코드를 변경
- .innerText 속성
엘리먼트 안의 텍스트를 변경
- .style 속성
css를 변경 가능
- getAttribute 메소드
element의 속성의 값을 얻어옴
하나의 인자 : attribute 이름을 받음
직접 객체에 동기화되지 않는 속성에 대해서도 접근이 가능
- setAttribute 메소드
element의 속성의 값을 설정함
두개의 인자 : attribute 이름, 설정할 속성의 값을 받음
직접 객체에 동기화되지 않는 속성에 대해서도 값 설정이 가능

### Document API
- document.getElementsBy~ : 다중 엘리먼트를 선택하는 메소드. 배열형태로 값을 반환함
- document.getElementsByTagName 메소드
인자로 HTML element 태그의 이름을 전달하면 해당 엘리먼트들이 반환됨
- document.getElementsClassName 메소드
인자로 class의 이름을 전달하면, 해당 class의 모든 엘리먼트가 배열로 반환됨
- document.getElementsByName 메소드
인자로 name을 전달하면, 해당 name 속성을 가진 모든 엘리먼트가 배열로 반환됨.
- Element API
.value 속성
input element에 입력된 값은 .value를 통해 얻어올 수 있음
getAttribute 메소드로는 받아올 수 없다는 점 주의

### Document API
- document.querySelector : css selector를 기반으로 엘리먼트를 선택
조건에 부합하는 element가 여러개인 경우 첫 엘리먼트만 반환.
- document.querySelectorAll : css selector를 기반으로 만족하는 모든 엘리먼트를 선택
CSS Selector
- # : name 기반으로 선택
- . : class 기반으로 선택
- , : 여러개의 셀렉터를 사용

### Document API
- document.createElement() : 문자열 인자로 element tag를 입력하면 해당 엘리먼트가 생성돼 반환됨
- Element API
.appendChild(인자) : 추가할 element를 인자로 받아 호출된 element의 자식으로 인자를 추가함
.removeChild(인자) : 삭제할 element를 인자로 받아 호출된 element의 자식중에서 해당 element를 삭제
.insertBefore(인자1, 인자2) : 인자1로 받은 element를 호출된 element의 자식중 인자2의 이전에 추가함 (인자1은 추가 할 element, 인자2는 추가하고자 하는 위치의 부모 element)
.cloneNode() : 호출된 element를 복사해서 반환함
