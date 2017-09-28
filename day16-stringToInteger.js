const input1 = `3`;
// Expected output
// 3

const input2 = `df`;
// Expected output
// Bad String

const input3 = `0x34234`;
// Expected output
// Bad String

processData(input2);
// function processData(input) {
//     if (isNaN(input*1)) {
//         console.log('Bad String');
//     } else {
//         console.log(parseInt(input));
//     }
// }

function processData(S) {
    try {
        let n = eval(S);
        console.log(n);
    } catch(e) {
        console.log('Bad String');
    }
}
