function solution(num) {
    let count = 0 
    let answer = 0
    for (let i = 0; i < num.length; i++) {
        if (num[i] == 'O') {  
            count++
        } else {
            count = 0
        }
        answer += count
    }
    console.log(answer)
}

console.log(solution('OOXXOXXOOO', 10))
