const input = `3
5 8 14
4 9`;
// expected output 4

processData(input);
function processData(input) {
    let [N, A, P] = input.split('\n');
    N = parseInt(N);
    A = A.split(' ').map( (a) => { return parseInt(a); });
    [P, Q] = P.split(' ').map( (p) => { return parseInt(p); });

    
} 