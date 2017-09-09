// expected output 4
const input1 = `3
5 8 14
4 9`;

// expected output 69
const input2 = `5
38 50 60 30 48
23 69`

processData(input1);
function processData(input) {
    let [N, A, P] = input.split('\n');
    let test = [], foundM = 0, maxN = 0, testN = 0;
    N = parseInt(N);
    A = A.split(' ').map( (a) => { return parseInt(a); });
    [P, Q] = P.split(' ').map( (p) => { return parseInt(p); });

    for (let M = P; M <= Q; M++) {
        test = [];
        for (let i = 0; i < N; i++) {
            test.push(Math.abs(A[i] - M));
        }
        testN = Math.min(...test);
        //console.log('M:', M, ' test:', testN);
        if (maxN < testN) {
            maxN = testN;
            foundM = M;
        }
    }

    //console.log('maxN:', maxN, ' foundM:', foundM);
    console.log(foundM);
} 