// 내 코드
// function solution(str) {
//   let answer = "YES";
//   str = str.toUpperCase();

//   let s = "";
//   for(let i=0; i<str.length; i++) {
//     let num = str[i].charCodeAt();
//     if(num <= 90 && num >= 65) s += str[i];
//   }

//   let len = s.length;
//   for(let i=0; i<Math.floor(len/2); i++) {
//     if(s[i] !== s[len-i-1]) return "NO";
//   }

//   return answer;
// }

// let str = "found7, time: study; Yduts; emit, 7Dnuof";
// console.log(solution(str));

// 강사님 코드

function solution(str) {
  let answer = "YES";
  str = str.toUpperCase();

  let s = "";
  for(let i=0; i<str.length; i++) {
    let num = str[i].charCodeAt();
    if(num <= 90 && num >= 65) s += str[i];
  }

  let len = s.length;
  for(let i=0; i<Math.floor(len/2); i++) {
    if(s[i] !== s[len-i-1]) return "NO";
  }

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));