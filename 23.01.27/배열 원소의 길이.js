function solution(strlist) {
    var answer = [];
    for (i = 0; i < strlist.length; i++) {
        let a = strlist[i]

        answer.push(a.length);
    }
    return answer;
}
console.log(solution(["We", "are", "the", "world!"], [2, 3, 3, 6]))
