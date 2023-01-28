//최솟값, 최대값 Math.min(a,b)  Math.max(a,b)
//사이값이랑 다더한다.
function solution(a, b) {
    var answer = 0;
    let min = Math.min(a, b) //최소값
    let max = Math.max(a, b) //최대값
    for (i = min; i <= max; i++) { //i값이 최소값으로 시작하고 i 값이 max값보다 작을때 까지 증가할때
        answer += i //min 값 부터 max 값까지 더한다.   
    }
    return answer;
}

console.log(solution(50, 8, 18))
