function solution(strings, n) {
    let answer = strings.sort((a, b) => {
        let avalue = a[n];
        let bvalue = b[n];
        if (avalue > bvalue) return 1;
        if (avalue < bvalue) return -1;
        if (avalue === bvalue) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0
        }
    });
    return answer;
}



function solution(strings, n) {
    strings.sort((a, b) => {
        let avalue = strings[a, n];
        let bvalue = strings[b, n];
        return avalue === bvalue ? (avalue > bvalue) - (avalue < bvalue) : (avalue < bvalue) - (avalue > bvalue)
    });

    return strings;
}

console.log(solution(["sun", "bed", "car"], 1))
console.log(solution(["abce", "abcd", "cdx"], 2))
