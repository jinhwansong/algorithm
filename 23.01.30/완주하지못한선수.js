//배열 정리.
//배열 두개를 뺀다.

//문자열로 만든다.
function solution(participant, completion) {
    let part = participant.sort()
    let comp = completion.sort()

    //part만큼 i가 돈다.
    for (i = 0; i < part.length; i++) {
        //part[i] 와 comp[i]가 같지 않을때 
        if (part[i] !== comp[i]) {
        //둘의 같지않은걸 answer에 리턴.
            return answer = part[i]
        }
    }
}
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"], "mislav"))