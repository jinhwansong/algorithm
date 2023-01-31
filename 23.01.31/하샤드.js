
function solution(x) {
    var answer = 0;
    let Num = String(x).split('')
    for (let i = 0; i < Num.length; i++) {
        answer += +Num[i]   
    }
    if (x % answer == 0) {
        return true
    } else {
        return false
    }

}
console.log(solution(12, true))