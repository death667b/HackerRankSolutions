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

processData(input1);
function processData(input) {
    let [t, ...allContestants] = input.split('\n');
    t = parseInt(t);

    for (let i = 0; i < t; i++) {
        let [n, ...contestants] = allContestants[i].trim().split(' ').map( num => parseInt(num) );
        contestants.sort( (a,b) => a-b);

        
        console.log(n, contestants);
    }
}