const input1 = `5`; // expected output 1
const input2 = `13`; // expected output 2


processData('1048');
function processData(input) {
    let count = 0, returnCount = 0;
    parseInt(input).toString(2).split('').forEach( (num, pos, arr) => {
        if (num === '1') {
            count++;
        } else {
            count = 0;
        }
        if (returnCount < count) returnCount = count;
    });
    console.log(returnCount);
}