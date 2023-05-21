let boxEl = document.querySelector('.box');

console.log(boxEl); // null

// HTML 요소(Element) 검색/찾기
boxEl.addEventListener('click', function () {
  console.log('Click!');
});

// 요소의 클래스 정보 객체 활용
// box클래스를 가지고 있는 요소에 active라는 클래스를 추가
boxEl.classList.add('active');
// box클래스 정보를 가지고 있는 객체 내부에 active라는 클래스가 있는지 없는지 체크
// active라는 클래스가 있으면 true, 없으면 false 반환
// 반환된 값은 isContains에 저장
let isContains = boxEl.classList.contains('active');
console.log(isContains); // true

// boxEl요소에서 active라는 클래스를 제거
boxEl.classList.remove('active');
// boxEl요소에 classList객체에 클래스active가 포함되어 있는지 체크
// isContains는 재할당 가능한 변수
isContains = boxEl.classList.contains('active');
console.log(isContains); // false