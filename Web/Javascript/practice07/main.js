const a = 'Hello!';

// split : 문자를 인수 기준으로 쪼개서 배열로 반환. 즉, 문자를 배열로 만드는 것.
// 인수는 ' ' 사이에 들어가는 것. 이것이 문자를 쪼개는 기준.
// reverse : 배열을 뒤집기.
// join : 배열을 인수 기준으로 문자로 병합해 반환.
// 메소드는 어떤 조건 하에 붙여서도 사용 가능하다.
// 규칙은 나중에...
const b = a.split('').reverse().join(''); // 메소드 체이닝

console.log(a); // Hello!
console.log(b); // !olleH
