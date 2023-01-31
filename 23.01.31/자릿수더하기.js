//배열마냥 123이라고 하면 다 따로 나눈다.
//더한다 끝
function solution(n) {
    let answer = 0
    let Num = String(n).split('');
    for(let i=0; i<Num.length; i++){
        answer += + Num[i]
    }
    return answer;

}
console.log(solution(123, 6))