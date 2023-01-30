//arr % divisor == 0 
//나뉘어 지는것만 오름차순으로 배열반환
//없다면 -1반환
//2중for문 if써야됨

//2.for문과 if문으로 구분을 한다.
//pash를 한다.


function solution(arr, divisor) {
    var answer = [];
    // 1.오름차순으로 변경을 한다.
    let array = arr.sort(function(a,b){
        return a - b
    });
    //array.length -1 만큼 i를 돌게 한다. 
    for (let i = 0; i < array.length; i++) {
        if (array[i] % divisor == 0) {
             answer.push(array[i])
        }
    }
    //answer.length 이때 answer의 길이는 없으니까... 
    //애초에 돌수 잇는거는 위에서 필터링이 되네 씨부레 하 
    if (answer.length == 0) {
         answer.push(-1)
    }



    return answer;
}
console.log(solution([3, 2, 6], 10, [-1]))


// [5, 9, 7, 10] 5[5, 10]
//     [2, 36, 1, 3] 1[1, 2, 3, 36]
//     [3, 2, 6] 10[-1]