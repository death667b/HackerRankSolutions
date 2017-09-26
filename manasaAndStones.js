// Expected output
// 2 3 4 
// 30 120 210 300 
const input1 = `2
3 
1
2
4
10
100`;


processData(input1);
function processData(input) {
    let n, a, b, [T, ...x] = input.split('\n');
    
    for (let t = 0; t < T; t++) {
        [n, a, b, ...x] = x;
        console.log(n,a,b,x);  

    }
} 