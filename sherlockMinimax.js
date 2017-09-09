// expected output 4
const input1 = `3
5 8 14
4 9`;

// expected output 69
const input2 = `5
38 50 60 30 48
23 69`

processData(input2);
function processData(input) {
    let [N, A, P] = input.split('\n');
    let test = 0, foundM = -1;
    N = parseInt(N);
    A = A.split(' ').map( (a) => { return parseInt(a); });
    [P, Q] = P.split(' ').map( (p) => { return parseInt(p); });

    for (let M = P; M <= Q; M++) {
        for (let i = 0; i < 3; i++) {
            test = Math.min(Math.abs(A[i] - M), i+1);
            if (test <= 0 || test > N) { 
                foundM = -1;
                break;
            }
            foundM = M;
            //console.log('M: ', M, ' Algo: ', test);
            
        }
        //console.log(' ');
        if (foundM > 0) return console.log(foundM);
    }
} 