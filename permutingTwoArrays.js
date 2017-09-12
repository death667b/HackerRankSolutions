const input1 = `2
3 10
2 1 3
7 8 9
4 5
1 2 2 1
3 3 3 4`;

permutingTwoArrays(input1);
function permutingTwoArrays(input) {
    const [numberOfQueries, ...rest] = input.split('\n');

    for (let i = 0; i < parseInt(numberOfQueries); i++) {
        const [n, k] = rest.shift().split(' ').map( x => parseInt(x) );
        let arrayA = rest.shift().split(' ').map( x => parseInt(x) );
        let arrayB = rest.shift().split(' ').map( x => parseInt(x) );
        // console.log('n:', n, ' k:', k)
        // console.log('arrayA:', arrayA, ' arrayB:', arrayB);

        arrayA.sort( (a,b) => a-b );
        arrayB.sort( (a,b) => b-a );

        compareArrays(arrayA, arrayB, k);

        if (arrayA.length > 0) {
            console.log('NO');
        } else {
            console.log('YES');
        }
    }
}

function compareArrays(a1, a2, k) {
    if (a1[0] + a2[0] >= k) {
        a1.shift();
        a2.shift();

        if (a1.length > 0) {
            compareArrays(a1, a2, k);
        }
    }
}