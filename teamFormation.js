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

// 10 4 0 1 5 5 3 4 2 3 2 3 4 2 4 3 1

const input2 = ``;

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

        if (n == 0 || n == 1) {
            console.log(n);
            continue;
        }

        myMap = new Map();
        contestants.forEach( (num,ele) => {
            myMap.set(num, myMap.get(num) + 1 || 1)
            if (contestants[ele+1] != contestants[ele]+1) {
                myMap.set(num+1, 0);
            }
        });
        
        // console.log(myMap);
        let lowestGroup = [], counter = 0, lastNumber = 0, protectionCounter = 0;
        let stopNow = false;
        do {
            protectionCounter++;
            lastNumber = 0;
            // counter = 0;
            stopNow = false;
            // console.log('starting do', counter);
            if(counter != 0) {lowestGroup.push(counter); counter = 0;};
            myMap.forEach( (v,k) => {
                // console.log('starting v:',v, counter)
                if(v == 0 && !stopNow) {
                    myMap.delete(k);
                    if(counter != 0) lowestGroup.push(counter);
                    stopNow = true;
                    lastNumber = 0;
                    counter = 0;
                    // console.log(' if v==0')
                }
                if(stopNow) return;
                if (v>=1 && v >= lastNumber) {
                    lastNumber = v;
                    myMap.set(k,v-1);
                    counter++;
                    if (myMap.get(k) == 0) myMap.delete(k)
                    // console.log('k: ', k, 'v: ', v, 'counter: ',counter)
                    if (myMap.size == 0) {
                        stopNow = true;
                        if(counter != 0) lowestGroup.push(counter);
                    }
                } else {
                    // console.log('asd: ', k)
                    if (myMap.get(k) == 0) myMap.delete(k)
                    stopNow = true;
                    if(counter != 0) lowestGroup.push(counter);
                    counter = 0;
                }
                // console.log('k: ', k, 'v: ', v, ' stopNow: ',stopNow, 'lowestGroup: ', lowestGroup, myMap)
            })
            // if (counter < lowestGroup && stopNow) lowestGroup = counter;
            
            // console.log('map size: ',myMap.size)
        } while (myMap.size >= 1 && protectionCounter < 2000);
        console.log(Math.min(...lowestGroup));
    }
}
