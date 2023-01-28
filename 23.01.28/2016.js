function solution(a, b) {
    var answer = '';
    //요일이름 SUN,MON,TUE,WED,THU,FRI,SAT
   let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'] 
   //각 달마다 마지막 날 
   let days = [31,29,31,30,31,30,31,31,30,31,30,31]
   //1월 1일이 금요일 일때 index값이 5여야되서 4더함
   let weeked = b + 4
   //,,,,?
    for(i=0; i < a -1; i++){
    //해당 달수를 구하기 위해 days의 i만큼 더해준다.
        weeked += days[i] 
    }
    //1주일은 7일 이기에 7나눔
    return week[weeked % 7];
}
console.log(solution(8, 10, 'WED'))