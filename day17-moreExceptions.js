const input1 =`4
3 5
2 4
-1 -2
-1 3`;
// Expected Outpu
// 243
// 16
// n and p should be non-negative
// n and p should be non-negative

class Calculator {
    power(n,p) {
        if (n < 0 || p < 0) return 'n and p should be non-negative';
        return Math.pow(n,p);
    }
}

main(input1);
function main(input){ 
    let [T, ...rest] = input.split('\n');
    const MyCalculator = new Calculator();

    rest.map( pair => {
        let ans, [n, p] = pair.split(' ');
        try {
            ans = MyCalculator.power(parseInt(n),parseInt(p));
        } catch(e) {
            console.log('n and p should be non-negative');
        }
        console.log(ans);
    })
    

}