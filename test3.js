//소수가 아닌 수중 최솟값
//소주중 최대값.
function solution(s) {
    let answer = '';
    if (s === 2)
        return true;

    for (let i = 2; i < s; i++) {
        if (s % i === 0) {
            return false;
        }
    }
    
}
let s = "6 3 5 7";


console.log(solution(s))