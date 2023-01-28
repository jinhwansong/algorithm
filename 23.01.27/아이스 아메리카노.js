function solution(money) {
    var answer = [];
    answer[0] = Math.floor(5500 / money) //갯수를 찾고 나머지가 잇으면 버린다.
    answer[1] = money - (5500 * answer[0])//전체 돈에서 커피를 산만큼의 돈을 뺀다.
    return answer;
}

console.log(solution(5, 500, [1, 0]))
