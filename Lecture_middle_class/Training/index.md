## 이미지 갤러리 틀 만들기

### Part 1. 갤러리 틀 만들기
1. JSON으로 갤러리에 표시될 이미지 리스트 가져오기
2. 배열에서 개별 이미지에 접근
3. 갤러리에 image 추가

### Part 2. 이미지 선택 기능 만들기
1. 이미지 클릭 이벤트 핸들링 하기
2. 이미지 선택/해제 기능 구현하기

#### 추가적으로 사용한 API
- classlist : 엘리먼트에 적용 된 클래스 리스트 객체
  - add, remove, toggle 메소드 : 해당 엘리먼트에 클래스를 추가, 삭제, 추가/삭제 기능 제공
  - toggle 메소드 : 스위치를 꼈다 켰다 할 수 있는 것 처럼 인자로 받은 클래스가 있으면 삭제하고 없으면 추가해 줌

### Part 3. 전체 선택 기능 만들기
1. 버튼 클릭 이벤트 핸들링 하기
2. 전체 이미지 div tag 얻어오기
3. 배열에서 각각의 이미지에 대해 class 조정

#### Note
- tag 속성으로 실행되던 event handler에서 this를 호출한 함수의 인자로 전달해 이벤트가 발생한 element에 쉽게 접근

### Part 4. 자세히 보기 기능 만들기
- mouseover 이벤트 핸들러에서 타이머를 설정
- setTimeout callback함수에서 element에 접근
- onmouseover 이벤트 핸들러에서 timerId 취소

#### Note
- mouseover event : 마우스 커서가 엘리먼트 위에 올라간 경우 발생하는 이벤트
- mouseout event : 마우스 커서가 엘리먼트에서 밖으로 나간 경우 발생
