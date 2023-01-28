function solution(n) {
    var a = [];
    for(let i = 1 ; i < n + 1; i++){
        if(i % 2 !== 0 ){
            a.push(i)
        }
    }
    return a

}
 console.log(solution(10,[1, 3, 5, 7, 9]))

/*
1. n이하의 정수를 구한다. ---- 0
2. 나머지가 1인 홀수를 구한다. ---- 
3. 오른차순으로 배열을 정렬한다. --- x
*/