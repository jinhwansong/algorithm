//하. 물건을 구매해볼까?
// function solution(num1) {
//     let money = [500,100,50,10]//편의점 소유 돈  
//     let spand = 1000 - num1 //소비한 돈
//     let count = 0 // 최종 장수 
//     money.forEach(function (value) {//하나 하나씩 순회해서 계산
//         count += Math.floor(spand / value)//혹시 모를 소수점 제거
//         spand = spand % value//잔돈은 다시 spand로 돌아가 0원이 될때까지 순회.
//     })
//     return count;
// }
// let num1 = 320;
// console.log(solution(num1))

//중. 동그라미 엑스로 숫자를? 
// function solution(str) {
//     let answer = 0; //최종 합
//     let count = 0 //순회할때 필요한 변수 - 이거 없으면 안돌던데....
//     for(i=0;i<str.length;i++){ //str.length만큼 돈다
//         if (str[i] == "O") { //str[i] 이 "0"일때
//             count += 1 // 1 + 2 + 0 + 1
//         }else{
//             count = 0 // 아니면 그냥 0
//         }
//         answer += count //카운트를 다하면 answer에 넣는다.
//     }
//     return answer;
// }
// let str = "OXOOOXXXOXOOXOOOOOXO";
// console.log(solution(str))



//상. 지뢰 탐지가 필요해!

function solution(N, arr1) {
    //8개는 arr1[dy][dx]로 (우)(좌)(아래)(위)(우하대각)(우상대각)(좌하)(좌상)이동으로 생각
    let x = [1, -1, 0, 0, 1, 1, -1, -1];
    let y = [0, 0, 1, -1, 1, -1, 1, -1];

    // N*N 2차원 배열 생성해서 0으로 채움
    let answer = Array.from(Array(N), () => Array(N).fill(0));
    
    // N*N 만큼 배열 돌면서
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            //지뢰를 만나면
            if (arr1[i][j] != ".") {
                // 8방향 돌면서 결과값을 answer 배열에 저장
                for (let n = 0; n < x.length; n++) {
                    const dx = j + x[n];
                    const dy = i + y[n];
                    console.log(dy)
                    // N*N 배열 범위 벗어나면 skip
                    if (dx < 0 || dy < 0 || dx >= N || dy >= N) {
                        // console.log("out!");
                        continue;
                    }
                    // 값이 10 이상이면 M으로 대체
                    answer[dy][dx] =
                        answer[dy][dx] + parseInt(arr1[i][j]) >= 10 ?
                        "M" :
                        answer[dy][dx] + parseInt(arr1[i][j]);
                }
                // 마지막 answer에 해당 지뢰위치 *으로 줌.
                answer[i][j] = "*";
            }
        }
    }
    //return answer;
}
let N = 5;
let arr1 = [
    ["1", ".", ".", ".", "."],
    [".", ".", "3", ".", "."],
    [".", ".", ".", ".", "."],
    [".", "4", ".", ".", "."],
    [".", ".", ".", "9", "."],
];
console.log(solution(N, arr1));