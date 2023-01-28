function solution(arr) {
    let num = arr.reduce(function (a, b) {
        return a + b
    })
    let num2 = arr.length
    return num / num2;
}


console.log(solution([1, 2, 3, 4], 2.5))