//Math.sqrt()로 루트값 구하고
//루트값 % 1 === 0이다 루트값이 정수가 아닌경우 나머지는 소수점이 나온다.
//Num +1 * Num +1

function solution(n) {
    var answer = 0;
    let Num = Math.sqrt(n)
    if (Num % 1 === 0) {
        answer = (Num + 1) * (Num + 1)
    }else{
        answer = -1
    }
    return answer
}
console.log(solution(121, 144))