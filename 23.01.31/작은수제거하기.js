
//기징직은수 구하기
function solution(arr) {
    var answer = 0;
    
    if (arr.length <= 1) {
        answer = [-1]
    } else {
        let min = Math.min(...arr)
        arr.splice(arr.indexOf(min), 1)
        answer = arr;
    }
    return answer;
}
console.log(solution([4, 3, 1, 2], [4, 3, 2]))