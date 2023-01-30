//s의 길이가 4 or 6 Number로 이루어 져잇다.
//그냥 s가 문자인지 숫자인지 구분하고 길이가 4 or 6일때
//숫자면 트루 문자잇으면 이즈펄스건
function solution(s) {
    //숫자면 그냥 출력 문자면 nan겂
    var answer = parseInt(s);

    if ((s.length == 4 || s.length == 6) && s == answer) {
        answer = true
    }else{  
        answer = false
    }
    return answer;
}
console.log(solution("123dfs4444", false))
