//absolutes값을 불러온다.
//signs[i]가 참인지 거짓인지 확인한다.
//결과값을 가지고 더한다.

function solution(absolutes, signs) {
    let anwser = 0;
    for (i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            anwser = anwser + absolutes[i] 
        }else{
           anwser = anwser - absolutes[i] 
        }
    }
    console.log(anwser)
    
}

console.log(solution([4, 7, 12], [true, false, true],9))






