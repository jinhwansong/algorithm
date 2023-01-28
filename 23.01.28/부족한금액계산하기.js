//price 만큼 이용료 증가
//ex 4번타고 싶은데 20원잇다면
//3+6+9+12 30 , 10원반환
//반복문 if문 사용햐여된다.


function solution(price, money, count) {
    let answer = 0;
    let a = 0
    //count 만큼 탑승 여기서 총합 30이 나와야한다...
    for (i = 1; i <= count; i++) {
        //i만큼 증가하고 증가할때마다 price 값을 곱한다.
        a += i * price
        //a 값이 가지고 잇는 돈보다 크다면
        if (a > money) {
            answer = a - money
            //나머지가 0이면 0
        } else {
            answer = 0
        }
    }
    return answer;
}

console.log(solution(3,20,4,10))