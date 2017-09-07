
// expected output 4
const input1 = `5
3 4 3 2 4`

// expected output 4
const input2 = `3
4 4 4`

// expected output 9
const input3 = `12
8 12 5 3 7 1 6 3 9 8 9 10`

// expected output 8
const input4 = `26
7 11 3 4 22 3 4 1 1 4 21 12 15 15 14 3 13 12 19 4 3 1 1 9 10 26`

// expected output 2
let input5 = '100000\n';
for (let i = 1; i <= 100000; i++) {
    if (i === 1) { input5 += i; }
    else { input5 += (' ' + i); }
}

// expected output 100000
let input6 = '100000\n';  
for (let i = 100000; i >= 1; i--) {
    if (i === 100000) { input6 += i; }
    else { input6 += (' ' + i); }
}

// expected output 2
const input7 = `1
4`

processData(input7);


function processData(input) {
    // Process input data
    let [N, H] = input.split('\n');
    N = parseInt(N);
    H = ('0 '+H)
        .split(' ')
        .map( h => parseInt(h) );

    const startEnergy = Math.pow(10,5);
    const minEnergy = 0;

    findBotEnergy(minEnergy, startEnergy, N, H);

    //console.log(processBot(2, N, H))
}

function findBotEnergy(minE, maxE, N, H, oldBotEnergy = 0, opCounter = 1) {
    if (opCounter > 30) return;

    let botEnergy = 0;
    testEnergy = Math.round( (maxE - minE) /2) + minE;
    const testBotEnergy = processBot(testEnergy, N, H);

    //console.log('minE: ',minE, ' maxE: ', maxE, ' testEnergy: ', testEnergy, ' testBotEnergy: ', testBotEnergy, ' opCounter: ', opCounter);

    if (testEnergy === oldBotEnergy) {
        console.log(testEnergy);
    } else if (testBotEnergy < 0) {
        //console.log('testBotEnergy < 1');
        if ((maxE ^ testEnergy) === 1) {
            console.log(testEnergy+1);
            return;
        }
        botEnergy = findBotEnergy(testEnergy, maxE, N, H, oldBotEnergy, ++opCounter);
    } else {
        botEnergy = findBotEnergy(minE, testEnergy, N, H, testEnergy, ++opCounter);
    }

    return;
}
 
function processBot(botEnergy, N, H) {
    for (let k = 0; k < N; k++){
        if (H[k+1] > botEnergy) {
            botEnergy -= (H[k+1] - botEnergy);
        } else {
            botEnergy += (botEnergy - H[k+1]);
        }

        if (botEnergy < 0) { return -1 };
    }

    return botEnergy;
}
 
