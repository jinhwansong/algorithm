//array에 n값을 뽑는다.
//몇개인지 구한다.

function solution(array, n) {
    var answer = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == n) { //array 중에 n을 찾는다
            answer++ //찾은만큼 증가한다.
        }
    }
    return answer
}