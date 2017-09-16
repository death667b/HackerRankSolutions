
// Expected output 4
const input1 = `7 50
1 12 5 111 200 1000 10`;

const input2Json = require('./markAndToys-input2.json');

main(input2Json);
function main(input) {
    if (typeof(input) === 'object') {
        input = input.one + '\n' + input.two;
    }
    let [deets, prices] = input.split('\n');
    let [N, K] = deets.split(' ').map( (num) => parseInt(num) );
    prices = prices.split(' ').map( (num) => parseInt(num) );

    console.log(maximumToys(prices, K));
}

function maximumToys(prices, k) {
    prices.sort( (a,b) => a-b );
    let toys = 0, moneyLeft = k;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < moneyLeft) {
            moneyLeft -= prices[i];
            toys++;
        } else {
            break;
        }
    }
    return toys;
}