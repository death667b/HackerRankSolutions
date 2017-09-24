const input1 = [ '1112', '1912', '1892', '1234'];
// Expected output
// 1112
// 1X12
// 18X2
// 1234

cavityMap(input1);
function cavityMap(theMap) {
    n = theMap.length;
    theMap = theMap
        .map( row => row.split('')
        .map( singles => parseInt(singles)
    ));

    let currentSquare;
    for (let x = 1; x < n-1; x++) {
        for (let y = 1; y < n-1; y++) {
            currentSquare = theMap[x][y];
            if (theMap[x-1][y] < currentSquare &&
                theMap[x+1][y] < currentSquare &&
                theMap[x][y-1] < currentSquare &&
                theMap[x][y+1] < currentSquare) {
                    theMap[x][y] = 'X';
                    
                }
        }
    }

    theMap
        .map( line => line.join(''))
        .map( line => console.log(line))
}