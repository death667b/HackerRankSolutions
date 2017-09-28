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

bubbleSort(input2);
function bubbleSort(input) {
    let [n, a] = input.split('\n');
    a = a.split(' ').map( x => parseInt(x));

    console.log(a)
}