// 정수 x 자연수 n
// x시작 x만큼 증가 n만큼 까지
// for문에서 변수를 생성하고 answer에 push한다.
function solution(x, n) {
    var answer = [];
    for (i = 0; i < n; i++) { // x시작 x만큼 증가 n만큼 까지
         let Num = x
         Num += i*x
        
        answer.push(Num)
    }
    return answer;
}

console.log(solution(2, 5, [2, 4, 6, 8, 10]))