const noMemberLogin = document.querySelector(".no_member_login_cont"); // 비회원 로그인 창
const loginfield = document.querySelector(".loginfield"); // 일반 로그인 창
const logiinEtc = document.querySelector(".logiinEtc"); // 아디 비번찾기창창
const socLog = document.querySelector(".soc_log"); // 소셜 로그인 창
const noButton = document.querySelector(".no_butt"); // 비회원 주문확인 버튼
const rmButton = document.querySelector(".rm_butt"); // 회원 버튼
const loginbt = document.querySelector(".login_bt"); //로그인 버튼
const nonmembt = document.querySelector(".nonmem_bt"); //확인버튼튼

noButton.addEventListener("click", () => {
  // 비회원 버튼 클릭
  noMemberLogin.style.display = "block"; // 비회원 로그인 창 보이기
  logiinEtc.style.display = "none"; //
  loginfield.style.display = "none"; // 기존 로그인 창 숨기기
  socLog.style.display = "none"; // 소셜 로그인 숨기기
  nonmembt.style.display = "block";
  // rmButton.style.display = "none";
});

rmButton.addEventListener("click", () => {
  // 회원 버튼 클릭
  noMemberLogin.style.display = "none"; // 비회원 로그인 창 숨기기
  loginfield.style.display = "block"; // 기존 로그인 창 다시 보이기
  socLog.style.display = "block"; // 소셜 로그인 다시 보이기
  logiinEtc.style.display = "block";
  // noButton.style.display = "none";
  loginbt.style.display = "block"; // 회원 로그인 버튼
});

// ↑ 로그인 / 비회원 주문확인 버튼 js
// ↓ 로그인 상태유지 체크박스 클릭시 활성화 js

const checkbox = document.querySelector(".ugcheck"); // 체크박스
const lgug = document.querySelector(".auto_lgug"); // 설명창

checkbox.addEventListener("change", () => {
  const currentDisplay = window.getComputedStyle(lgug).display;

  if (currentDisplay === "block") {
    lgug.style.display = "none"; //숨김
  } else {
    lgug.style.display = "block"; // 보이기
    // checkbox.style.display = "none";
  }
});

// "회원", "비회원 주문확인" 버튼 클릭 시 스타일 스왑
// "비회원 주문확인" 버튼 클릭 시
document.querySelector(".no_butt").addEventListener("click", () => {
  //비회원 주문확인 버튼 누르면 보더가 바뀌어요!
  document.querySelector(".no_butt").style.borderBottom =
    "0px solid rgb(184, 184, 184)";
  document.querySelector(".no_butt").style.borderRight =
    "1px solid rgb(94, 174, 255)";
  document.querySelector(".no_butt").style.borderTop =
    "1px solid rgb(94, 174, 255)";
  document.querySelector(".no_butt").style.borderLeft =
    "1px solid rgb(94, 174, 255)";
  document.querySelector(".rm_butt").style.border =
    "1px solid rgb(184, 184, 184)";
  document.querySelector(".rm_butt").style.borderBottom =
    "1px solid rgb(94, 174, 255)";
  // 볼드 속성 변경
  document.querySelector(".nob").style.color = "rgb(31, 133, 235)";
  // document.querySelector(".nob").style.fontweight = "900";
  document.querySelector(".rmb").style.color = "rgb(0, 0, 0)";
  document.querySelector(".rmb").style.fontweight = "";
  // 폰트 속성
  // 배경속성 변경
  document.querySelector(".rm_butt").style.backgroundColor =
    "rgb(241, 241, 241)";
  document.querySelector(".no_butt").style.backgroundColor = "white";
});

document.querySelector(".rm_butt").addEventListener("click", () => {
  ////회원 주문확인 버튼 누르면 보더가 바뀌어요!
  document.querySelector(".rm_butt").style.borderBottom =
    "0px solid rgb(184, 184, 184)";
  document.querySelector(".rm_butt").style.borderRight =
    "1px solid rgb(94, 174, 255)";
  document.querySelector(".rm_butt").style.borderTop =
    "1px solid rgb(94, 174, 255)";
  document.querySelector(".rm_butt").style.borderLeft =
    "1px solid rgb(94, 174, 255)";
  document.querySelector(".no_butt").style.border =
    "1px solid rgb(184, 184, 184)";
  document.querySelector(".no_butt").style.borderBottom =
    "1px solid rgb(94, 174, 255)";
  // 볼드속성변경
  // 폰트속성변경
  document.querySelector(".rmb").style.color = "rgb(31, 133, 235)";
  document.querySelector(".rmb").style.fontweight = "bold";
  document.querySelector(".nob").style.color = "rgb(0, 0, 0)";
  // document.querySelector(".nob").style.fontweight = "900";
  // 배경속성변경
  document.querySelector(".no_butt").style.backgroundColor =
    "rgb(240, 240, 240)";
  document.querySelector(".rm_butt").style.backgroundColor = "white";
});

// 회원칸, 아이디 없이 로그인 버튼 누르면 나오는 경고메세지 출력
document.querySelector(".deflog").addEventListener("submit", function (event) {
  event.preventDefault();
  const idin = document.querySelector(".idin");
  const erid = document.querySelector(".erid");

  if (idin.value.trim() === "") {
    idin.style.border = "1px solid red"; // 경고 스타일
    erid.textContent = "아이디를 입력해주세요."; // 경고 메시지
    erid.style.fontSize = "13px";
    erid.style.marginBottom = "9px"; // 글자 위치 조정
    erid.style.color = "red"; //글자는 빨간색색
    erid.style.display = "block"; // 메시지 표시
  } else {
    idin.style.border = "1px solid lightgray"; // 정상 스타일
    erid.style.display = "none"; // 메시지 숨김
  }
});

// 비밀번호 입력란 오류 메세지 호출
// 비밀번호 trim && ID인풋 태그 입력 랭스 1이상 일시 메세지 호출
document.querySelector(".deflog").addEventListener("submit", function (event) {
  event.preventDefault();
  const pwin = document.querySelector(".pwin");
  const pwer = document.querySelector(".pwer");
  const idin = document.querySelector(".idin");
  if (pwin.value.trim() === "" && idin.value.length > 0) {
    pwin.style.border = "1px solid red"; // 경고 스타일
    pwer.textContent = "비밀번호를 입력해주세요."; // 경고 메시지
    pwer.style.fontSize = "13px";
    pwer.style.marginBottom = "9px"; // 글자 위치 조정
    pwer.style.color = "red"; //글자는 빨간색색
    pwer.style.display = "block"; // 메시지 표시
  } else {
    pwin.style.border = "1px solid lightgray"; // 정상 스타일
    pwer.style.display = "none"; // 메시지 숨김
  }
});

// 비회원 주문확인 버튼에 대한 이벤트 전파로 막기
// document.getElementById("child").addEventListener("click", (event) => {
//   event.stopPropagation(); // 이벤트 전파 방지
//  이벤트 js없이 아래 js 삽입하니 문제 해결.

// 주문확인 번호를 안치면 빨간 경고글자 삽입입
document.querySelector(".jm_ran").addEventListener("submit", function (event) {
  event.preventDefault();
  const jmid = document.querySelector(".jmid");
  const jmer = document.querySelector(".jmer");

  if (jmid.value.trim() === "") {
    jmid.style.border = "1px solid red"; // 경고 스타일
    jmer.textContent = "주문 번호를 입력해주세요."; // 경고 메시지
    jmer.style.marginBottom = "10px"; // 글자 위치 조정
    jmer.style.fontSize = "13px";
    jmer.style.color = "red"; //글자는 빨간색색
    jmer.style.display = "block"; // 메시지 표시
  } else {
    jmid.style.border = "1px solid lightgray"; // 정상 스타일
    jmer.style.display = "none"; // 메시지 숨김
  }
});

// 주문확인 비밀번호 미입력시 경고문 삽입입
document.querySelector(".jm_ran").addEventListener("submit", function (event) {
  event.preventDefault();
  const jmpw = document.querySelector(".jmpw");
  const jmper = document.querySelector(".jmper");
  const jmid = document.querySelector(".jmid");
  if (jmpw.value.trim() === "" && jmid.value.length > 0) {
    jmpw.style.border = "1px solid red"; // 경고 스타일
    jmper.textContent = "주문 비밀번호를 입력해주세요."; // 경고 메시지
    jmper.style.fontSize = "13px";
    jmper.style.paddingBottom = "17px"; // 글자 위치 조정
    jmper.style.color = "red"; //글자는 빨간색색
    jmper.style.display = "block"; // 메시지 표시
  } else {
    jmpw.style.border = "1px solid lightgray"; // 정상 스타일
    jmper.style.display = "none"; // 메시지 숨김
  }
});
