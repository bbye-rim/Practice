let boxEl = document.querySelector('.box');

console.log(boxEl); // null

// HTML 요소(Element) 검색/찾기
boxEl.addEventListener('click', function () {
  console.log('Click!'); // Click!
  // [Box!!]를 클릭하면 개발자 도구에서 [Box!!]를 선택했을 때 Element에 active클래스가 추가된 것을 볼 수 있다.
  boxEl.classList.add('active');
  console.log(boxEl.classList.contains('active')); // true
  boxEl.classList.remove('active');
  console.log(boxEl.classList.contains('active')); // false
});