//numbers 외 0 부터 9까지의 숫자를 구한다
//numbers의 더한값을 구한다.
//그 숫자를 뺀다.
function solution(numbers) {
    var answer = 0;
    var num = numbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    }); // 왼쪽이랑 현재 배열의 숫자를 더한다. 끝날때까지.
    for (i = 0; i <= 9; i++) { // i 는 0 부터 9까지이다.
        answer += i //i에 0 부터 9까지 더한다.
    }
    return answer - num; //전체값에서 num값을 뺀다.
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0], 14))
