//1주일간 알고리즘 얼마나 풀어봣니 
//새벽 5시이후에 종료시 저녁 9시로 찍힌다.
function solution(arr1, arr2) {
    let answer = 0
    for(i=0;i<7;i++){
        if(arr2[i] >= 29){
            answer += 21 - arr1[i]
        }else{
            answer += arr2[i] - arr1[i] 
        }
    }
    return answer
}
let arr1 = [9, 9, 9, 9, 7, 9, 8];
let arr2 = [23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2, 102))