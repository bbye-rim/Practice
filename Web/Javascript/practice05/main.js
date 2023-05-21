// HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');

// 출력
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});