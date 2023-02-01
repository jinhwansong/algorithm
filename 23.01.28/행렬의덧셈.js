
function solution(arr1, arr2) {
    var answer = []
    //addArr에 i가 arr1.length길이만큼 돌아간다.
    for (let i = 0; i < arr1.length; i++) { 
        let addArr = [];
        // addArr이라는 새로운 변수에는
        // arr1의 i번째 인덱스의 j번째 요소와
        // arr2의 i번째 인덱스의 j번째 요소를 합한 것을 넣어준다.
        for (let j = 0; j < arr1[i].length; j++) {
            addArr.push(arr1[i][j]+ arr2[i][j])
        }
        answer.push(addArr) //answer 에 푸시한다.
    }

    return answer
}
console.log(solution([[1, 2], [2, 3]], [ [3, 4], [5, 6]], [ [4, 6], [7, 9]]))