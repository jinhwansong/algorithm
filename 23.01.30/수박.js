
//수박을 n째까지 반복하고 시작부터 n까지 구한다.
function solution(n) {
    let answer = '수박'.repeat(n).substring(0, n)
    return answer;
}
console.log(solution(3, "수박수"))