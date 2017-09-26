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
         
        let adder = b-a;
        let currentNumber = --n*a;
        let displayNumber = '' + currentNumber.toString();

        for (let x = 0; x < n; x++) {
            currentNumber += adder;
            displayNumber += ' ' + currentNumber.toString();
        }
        
        console.log(displayNumber);
    }
} 
/*

  5 10 100
b-a = 100-10 = 90
10*--n



  0, 10, 20, 30, 40         40 +
  0, 10, 20, 30, 130        90
  0, 10, 20, 120, 130       0    
  0, 10, 110, 120, 130      0
  0, 100, 110, 120, 130     0
  0, 100, 110, 120, 220     90
  0, 100, 110, 210, 220     0
  0, 100, 200, 210, 220     0
  0, 100, 200, 210, 310     90
  0, 100, 200, 300, 310     0
  0, 100, 200, 300, 400     90

  */