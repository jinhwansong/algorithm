function solution(sizes) {
    var biggerSideMax = 0;
    var smallerSideMax = 0;

    for (let i = 0; i < sizes.length; i++) {
        let w_size = sizes[i][0]
        let h_size = sizes[i][1]
        if (w_size > h_size) {
            biggerSideMax = Math.max(biggerSideMax, w_size)
            smallerSideMax = Math.max(smallerSideMax, h_size)
        } else {
            biggerSideMax = Math.max(biggerSideMax, h_size)
            smallerSideMax = Math.max(smallerSideMax, w_size)
        }
    }
    return biggerSideMax * smallerSideMax;
}


function solution(sizes) {
    var biggerSideMax = 0;
    var smallerSideMax = 0;

    for (let i = 0; i < sizes.length; i++) {
        let w_size = sizes[i][0]
        let h_size = sizes[i][1]
        if (w_size > h_size) {
            if (w_size > biggerSideMax) {
                biggerSideMax = w_size
            }
            if (h_size > smallerSideMax) {
                smallerSideMax = h_size
            }
        } else {
            if (w_size > smallerSideMax) {
                smallerSideMax = w_size
            }
            if (h_size > biggerSideMax) {
                biggerSideMax = h_size
            }
        }

    }
    return biggerSideMax * smallerSideMax;
}
