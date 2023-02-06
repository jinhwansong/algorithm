function solution(num_list) {
    var answer = [];
    let num = []
    for (i = 0; i < num_list.length; i++){
        if (num_list[i] % 2 == 0) {
            num.push(num_list[i])
        }else{
            answer.push(num_list[i])
        }
    }
    answer = [num.length,answer.length]
    return answer;

}
console.log(solution([1, 2, 3, 4, 5],[2, 3]))