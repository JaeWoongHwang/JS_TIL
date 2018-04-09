### 페이지 구성
- 브라우저는 HTML문서를 읽으면서 script tag를 실행함
  - HTML 문서 Element 파싱 보다 스크립트가 먼저 실행되면 접근되지 않음
  - 꼭 필요한 경우가 아니라면 script를 페이지 하단에 배치하는 것이 로딩을 빠르게 할 수 있음
  - 페이지의 상단의 script 에서 이후 파싱될 Element에 접근하고 싶다면 onload 등의 eventhandler로 실행되도록 해야 함
- 최근 표준에선 async, defer 속성을 이용하면 스크립트의 실행과 문서의 로딩을 동시에 진행할 수 있음(비 동기적)
