//전화번호 뒷 4자리 추출
//나머지 자리를 *로 변경.
//다시합치기


function solution(phone_number) {
    let lastNum = phone_number.slice(-4) //마지막에서 4번째자리까지 추출
    let otherNum = phone_number.replace(lastNum,'')//전체에서 추출한곳을 뺌
    let replaceNum = otherNum.replace(/[0-9]/gi, '*')//숫자부분을 *로 변경함
    var answer = replaceNum + lastNum;//변경한거와 추출한거를 합침
    return answer;
}

console.log(solution("01033334444", "*******4444"))
