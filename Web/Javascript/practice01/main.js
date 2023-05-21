console.log('Hello')

// ---

// 자료형
// 문자 데이터
let myName = "YERIM";
let email = 'yelim3907@gmail.com'
// let hello = `Hello ${myName}`
let hello = `Hello ${false}`
// 세미콜론을 붙이지 않으면 JS 해석 엔진이 자동으로 세미콜론 붙여서 해석한다.
// JS 문법에 있어서는 세미콜론이 있어야 하나의 명령이 끝났다고 인식
// 붙이지 않아도 되지만, 상황에 따라 반드시 세미콜론이 필요한 경우가 있기 때문에 세미콜론을 사용할 것.

console.log(myName);
console.log(email);
console.log(hello);


// 객체 데이터
let user = {
  name: 'Yerim',
  age: 22,
  isValid: true
}

console.log(user);
console.log(user.age); // 변수 user 내의 속성 age의 값을 출력

// ---

/* 
// 함수
// 함수 선언
function helloFunc() {
  // 실행 코드
  console.log(1234);
}

// 함수 호출
helloFunc(); // 1234


// 함수 반환
function returnFunc() {
  return 123; // 반환 키워드 return
}

let a = returnFunc(); // 함수 호출(실행)

console.log(a); // 123 
*/

// ---

/*
// 함수 선언
function sum(a, b) { // a와 b는 매개변수(Parameters)
  return a + b;
}

// 재사용
let a = sum(1, 2); // 1과 2는 인수(Arguments)
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a, b, c); // 3, 19, 6
*/

// ---

/*
// 가명(이름이 있는) 함수
// 함수 선언
function hello() {
  console.log('Hello!');
}

// 익명(이름이 없는) 함수
// 함수 표현
let world = function () {
  console.log('World~');
}

// 함수 호출
hello(); // Hello!
world(); // World~
*/

// ---

/*
// 객체 데이터
const myIntro = {
  name: 'Yerim',
  age: 24,
   // 메소드(Method)
   getName: function() {
    return this.name;
   }
};

const herName = myIntro.getName();
console.log(herName); // Yerim
// 혹은
console.log(myIntro.getName()); // Yerim
*/

// ---

