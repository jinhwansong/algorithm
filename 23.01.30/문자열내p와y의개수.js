//p개수와 y개수 비교
//같거나 둘다 없으면 true 다르면 false
//대문자든 소문자든 변환후 비교해야된다.

function solution(s) {
    var answer = 0;
    //대문자 변환 
    let str = s.toUpperCase()
    //str에 p개수 새기
    let pStr = str.split('P').length -1;
    //str에 y개수 새기
    let yStr = str.split('Y').length - 1;
    if (yStr == pStr) {
        answer = true
    } else if (yStr != pStr) {
        answer = false
    } else if (answer == 0) {
        answer = true
    }
    //str에 둘다 없을떄 true

    return answer;
}
console.log(solution("Pz", true))


function solution(s) {
    //대문자 변환 
   return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
console.log(solution("kz", true))