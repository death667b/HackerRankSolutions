const input1 = `4
1112
1912
1892
1234`;
// Expected output
// 1112
// 1X12
// 18X2
// 1234

cavityMap(input1);
function cavityMap(input) {
    let [n, ...theMap] = input.split('\n');
    theMap = theMap
        .map( row => row.split('')
        .map( singles => parseInt(singles)
    ));

    console.log(theMap)
}