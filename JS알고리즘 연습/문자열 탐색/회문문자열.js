function solution(str) {
  let answer;
  let compare = [];
  let s = "";

  for(let i=0; i<str.length/2; i++) s += str[i].toLowerCase();
  compare.push(s);

  s = "";
  for(let i=str.length-1; i>=str.length/2; i--) s += str[i].toLowerCase();
  compare.push(s);

  if(compare[0] === compare[1]) answer = "YES";
  else answer = "NO";

  return answer;
}

console.log(solution("gooG"));