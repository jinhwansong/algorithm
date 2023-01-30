//단어별로 일단 나눠야됨...
//짝수시 toUpperCase
//홀수시 toLowerCase
function solution(s) {
    var answer = '';
    let str = s.split(' ')
    for (i = 0; i < str.length; i++) {
        let strTwo = str[i].split('')
        for (j = 0; j < strTwo.length; j++) {
            if (i % 2 == 0) {
                answer += strTwo[j].toUpperCase()
            } else {
                answer += strTwo[j].toLowerCase()
            }
        }
        if(i !== strTwo.length -1 ){
            answer += ' ';
        }
    }
    return answer;
}

console.log(solution("try hello world", "TrY HeLlO WoRlD"))