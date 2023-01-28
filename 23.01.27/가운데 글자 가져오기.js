//짝수면 두글자
//홀수면 한글자

function solution(s) {
    var answer = '';
    if (s.length % 2 == 1) {
        answer = s[Math.floor(s.length / 2)] //배열 s의 문자열을 숫자로 바꾸고 나눈다음에 나머지값을 없앤다.
    } else {
        answer = s[s.length / 2 - 1] + s[s.length / 2] //위와 비슷
    }
    return answer;
}