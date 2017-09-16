
// Expected output 4
const input1 = `7 50
1 12 5 111 200 1000 10`;

main(input1);
function main(input) {
    let [deets, prices] = input.split('\n');
    let [N, K] = deets.split(' ').map( (num) => parseInt(num) );
    prices = prices.split(' ').map( (num) => parseInt(num) );

    console.log(maximumToys(prices, K));
}

function maximumToys(prices, k) {
    prices.sort( (a,b) => a-b );

    return findNumberToys(prices, k);
}

function findNumberToys(prices, k, toys = 0) {
    let foundToys = 0;
    if (prices.length > 0 && prices[0] < k) {
        prices.shift();
        foundToys = findNumberToys(prices, k, ++toys);
    } else {
        foundToys = toys;
    }
    return foundToys;
}