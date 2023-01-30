function solution(a, b) {
    var answer = 0;
    for(i=0;i<a.length;i++){
        answer += a[i] * b[i]
    }
    return answer;
}
console.log(solution([-1, 0, 1], [1, 0, -1], -2))