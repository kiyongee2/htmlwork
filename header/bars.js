// 자바스크립트로 구현
let toggleBtn = document.querySelector(".navbar_toggleBtn");
let menu = document.querySelector(".navbar_menu");

//버튼 눌렀을때 클릭 이벤트 발생
toggleBtn.addEventListener('click', function(){
  //active라는 이름의 클래스를 추가/삭제 동시에 함
  menu.classList.toggle('active');
})