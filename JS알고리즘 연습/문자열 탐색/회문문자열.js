// 내 코드
// function solution(str) {
//   let answer;
//   let compare = [];
//   let s = "";

//   for(let i=0; i<str.length/2; i++) s += str[i].toLowerCase();
//   compare.push(s);

//   s = "";
//   for(let i=str.length-1; i>=str.length/2; i--) s += str[i].toLowerCase();
//   compare.push(s);

//   if(compare[0] === compare[1]) answer = "YES";
//   else answer = "NO";

//   return answer;
// }

// console.log(solution("gooG"));


// 강사님 코드
// function solution(str) {
//   let answer = "YES";
//   str = str.toLowerCase();
//   let len = str.length;

//   for(let i=0; i<Math.floor(len/2); i++) {
//     if(str[i] !== str[len-i-1]) {
//       answer = "NO";
//       break;
//     }
//   }

//   return answer;
// }

// let str = "gooG";
// console.log(solution(str));


// 다른 코드

function solution(str) {
  let answer = "YES";
  str = str.toLowerCase();
  if(str !== str.split('').reverse().join('')) answer = "NO";

  return answer;
}

let str = "gooG";
console.log(solution(str));