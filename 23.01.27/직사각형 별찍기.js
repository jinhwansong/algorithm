// n : 가로 , m: 세로
// '*'을 사용해서 가로세로 직사각형으로 변경


let Number = [5, 3]
const a = Number(n[0]),
    b = Number(n[1]);
let row = '*'.repeat(a) //가로값 *개수

for (let i = 0; i < b; i++) { //i가 b보다 작은 만큼 돌아감
    console.log(row[i])
}
