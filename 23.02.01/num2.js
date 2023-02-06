function solution(spend) {
    let coins = [500,100,50,10,5,1]//잔돈 배열
    let money = 1000 - spend //사용금액 620
    let count = 0;//돈 갯수
    for (coin of coins) { // coins안에 하나하나를 coin에 담는다.. 돌때는 하나씩 돌겟지?
        if(money == 0) break //money가 0원일떼 멈춘다.
        count += parseInt(money / coin)//1 + 1
        money %= coin
        console.log(count)
    }
    //  coins.forEach(function (value) {
    //      bill += Math.floor(money / value)
    //      money = money % value
    //  })
    //return count
}
console.log(solution(380,4))

//500엔을 썻으니까 money에 120엔이 나오고 
//