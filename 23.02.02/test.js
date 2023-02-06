//연속 0가 나오면 1씩추가 1 + 2 이런식으로
//x가 중간에 잇으면 다시 1부터 
function solution(num) {
    let count = 0
    let answer = 0
    for(let i = 0; i < num.length; i++){
        if (num[i] == 'O') {
            count += 1
        }else{
            count = 0
        }
        answer += count
    }
    return answer
}

console.log(solution('OOXXOXXOOO', 10))
