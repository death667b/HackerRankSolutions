/*  Expected Output
3
1
1
7
*/
const input1 = `4  
7 4 5 2 3 -4 -3 -5  
1 -4  
4 3 2 3 1  
7 1 -2 -3 -4 2 0 -1 `;

const input2 = `17
10 1 2 3 4 5 10 9 8 7 6
8 101 102 103 104 105 106 103 104
0
5 1 2 3 4 9
10 6665 6663 6663 6666 6666 6662 6664 6662 6664 6665
10 901 900 902 904 903 900 901 903 904 902
10 6449 6447 6452 6448 6448 6446 6450 6450 6451 6445
9 3734 3735 3736 3733 3737 3734 3736 3737 3735
9 3916 3918 3912 3913 3919 3914 3911 3913 3915
10 61 60 62 65 64 64 61 59 63 63
10 9667 9669 9661 9670 9667 9665 9664 9662 9666 9668
7 6076 6079 6078 6077 6077 6078 6080
9 9445 9450 9449 9449 9447 9448 9447 9446 9448
7 66 62 65 61 62 64 63
8 2813 2814 2812 2814 2812 2815 2813 2815
10 4048 4048 4050 4046 4047 4049 4048 4049 4047 4047
10 7 7 6 5 5 5 5 5 7 7`;

processData(input1);
function processData(input) {
    let [t, ...allContestants] = input.split('\n');
    t = parseInt(t);

    for (let i = 0; i < t; i++) {
        let [n, ...contestants] = allContestants[i]
            .trim()
            .split(' ')
            .map( num => parseInt(num) );
        contestants.sort( (a,b) => a-b);

        myMap = new Map();
        myMap.set(Math.min(...contestants)-1, 0);
        contestants.forEach( (num,ele) => {
            myMap.set(num, myMap.get(num) + 1 || 1)
            if (contestants[ele+1] != contestants[ele]+1) {
                myMap.set(num+1, 0);
            }
        });
        
        
        console.log(myMap);

        
    }
}
