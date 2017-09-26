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

const input2 = `5
958
5
7
27
10
3
521
7
3
204
8
3
316
1
1`;

const input3 = `1
27
10
3`

// 78 85 92 99 106 113 120 127 134 141 148 155 162 169 176 183 190 197 204 211 
// 218 225 232 239 246 253 260

processData(input3);
function processData(input) {
    let n, a, b, [T, ...x] = input.split('\n');
    let displayNumber = new Set();
    
    for (let t = 0; t < T; t++) {
        [n, a, b, ...x] = x;
        displayNumber.clear();
        n = parseInt(n);
        a = parseInt(a);
        b = parseInt(b);
         
        let adder = Math.abs(b-a);
        let currentNumber = (a < b) ? --n*a : --n*b;
        displayNumber.add(currentNumber.toString());

        for (let counter = 0; counter < n; counter++) {
            currentNumber += adder;
            displayNumber.add(currentNumber.toString());
        }

        displayNumber.forEach( x => process.stdout.write(x.toString()+' '));
        process.stdout.write('\n');
    }
}