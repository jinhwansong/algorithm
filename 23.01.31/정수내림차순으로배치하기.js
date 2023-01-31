function solution(n) {
    
    let str = String(n).split('').sort(function(a,b){
        return b - a
    })
    let Num = str.join('');
    var answer = Number(Num);
    return answer;
}
console.log(solution(118372, 873211))