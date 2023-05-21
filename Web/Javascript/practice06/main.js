// 가장 처음에 찾은 1개만 변수에 저장
const boxEl = document.querySelector('.box');

// textContent는 값을 얻는 용도로도 쓰이지만 값을 지정하는 용도로도 사용 가능하다.
// Getter, 값을 얻는 용도
// box요소에서 텍스트에 해당하는 내용만 반환하여 출력
console.log(boxEl.textContent); // 1

// Setter, 값을 지정하는 용도
// box요소의 문자 데이터가 textContent에 지정
boxEl.textContent = 'Yerim?!'; // 1 부분을 Yerim?!으로 지정
console.log(boxEl.textContent); // Yerim?!