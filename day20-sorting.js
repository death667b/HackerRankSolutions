const input1 = `3
1 2 3`;
// Array is sorted in 0 swaps.
// First Element: 1
// Last Element: 3

const input2 = `3
3 2 1`;
// Array is sorted in 3 swaps.
// First Element: 1
// Last Element: 3

const input3 = `20
1023 10 4 9 2 6 33 5 44 63 9 12 98 102 103 101 1 123 502 0`

bubbleSort(input3);
function bubbleSort(input) {
    let [n, a] = input.split('\n');
    let totalSwaps = 0;
    a = a.split(' ').map( x => parseInt(x));

    for (let x = 0; x < n; x++) {
        let numberOfSwaps = 0;

        for (let j = 0; j < n-1; j++) {
            let placeHolder;
            if (a[j] > a[j+1]) {
                placeHolder = a[j];
                a[j] = a[j+1];
                a[j+1] = placeHolder;
                numberOfSwaps++;
                totalSwaps++;
            }
        }

        if (numberOfSwaps == 0) break;
    }
    console.log(`Array is sorted in ${totalSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n-1]}`);
}