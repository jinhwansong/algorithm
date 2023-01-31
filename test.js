// 항해 1 일 차 날짜를 입력하면 98 일 이후 항해를 수료하게 되는 날짜 계산
// date함수를 이용해서 98일 뒤는 언제인지 알아낸다.
// 알아낸 날짜와 현 날짜를 빼준다.

function solution(month, day) {
    //month는 0부터 11까지기때문에 -1해줘야됨.
    const days = new Date(2023, month - 1, day)
    //98일을 더해준다.
    days.setDate(days.getDate() + 98);
    //원래 달로 가려면 이제 +1해줘야됨.
    let mon = days.getMonth() + 1
    let date = days.getDate()
    return `${mon}월 ${date}일`
}

console.log(solution(1, 18))



