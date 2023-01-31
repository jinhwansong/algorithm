//숫자열을 배열로 만든뒤 뒤집는다.
//for문을 이용해서 나눈다.
function solution(n) {
    var answer = [];
    let Num = String(n).split('').reverse();
    for(i=0;i<Num.length;i++){
        answer.push(Number(Num[i]))
    }

    return answer;
}
console.log(solution(12345, [5, 4, 3, 2, 1]))