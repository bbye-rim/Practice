// 조건문
let isShow = true;
let checked = false;

// 조건이 참이라면 {}내용 실행
if (isShow) { 
  console.log('Show!'); // Show!
}

// 조건이 거짓이라면 {}내용 실행X
if (checked) {
  console.log('Checked!');
}

isShow = false;
if (isShow) {
  console.log('Show!');
} else { // if문에 해당되지 않는다면
  console.log('Hide?');
}