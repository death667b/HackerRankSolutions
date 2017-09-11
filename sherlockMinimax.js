//  The bruteForceMethod was written by me.  It works but is too slow, eg: input3 does approx 18,000,000,000 operations.
//  The alternate method was copied from HackerRank user ayushr2.  His submission was written in python and I wrote it in
//    JavaScript.  For the alternate solution, all test cases pass expect for case #1 - which is input1 in this script.
//
//  https://www.hackerrank.com/ayushr2
//
//  https://www.hackerrank.com/challenges/sherlock-and-minimax/problem

// expected output 4
const input1 = `3
5 8 14
4 9`;

// expected output 69
const input2 = `5
38 50 60 30 48
23 69`

// expected output 173959056
const input3 = `79
263044060 323471968 60083128 764550014 209332334 735326740 558683912 626871620 232673588 428805364 221674872 261029278 139767646 146996700 200921412 121542678 96223500 239197414 407346706 143348970 60722446 664904326 352123022 291011666 594294166 397870656 60694236 376586636 486260888 114933906 493037208 5321608 90019990 601686988 712093982 575851770 411329684 462785470 563110618 232790384 511246848 521904074 550301294 142371172 241067834 14042944 249208926 36834004 69321106 467588012 92173320 360474676 221615472 340320496 62541478 360772498 372355942 445408968 342087972 685617022 307398890 437939090 720057720 718957462 387059594 583359512 589920332 500463226 770726204 434976772 567860154 510626506 614077600 620953322 570332092 623026436 502427638 640333172 370673998
70283784 302962359`

// expected output 11
const input4 = `4
1 5 8 14
2 12`

// bruteForceMethod(input4);
alternate(input1);


function bruteForceMethod(input) {
    let [N, A, P] = input.split('\n');
    let test = [], foundM = 0, maxN = 0, testN = 0, num = 0;
    N = parseInt(N);
    A = A.split(' ').map( (a) => { return parseInt(a); });
    [P, Q] = P.split(' ').map( (p) => { return parseInt(p); });

    for (let M = P; M <= Q; M++) {
        test = [];
        for (let i = 0; i < N; i++) {
            num = Math.abs(A[i] - M);
            if (num < 1) {
                test = [0];
                break;
            }
            test.push(num);
        }
        testN = Math.min(...test);
        //console.log('M:', M, ' test:', testN);
        if (maxN < testN) {
            maxN = testN;
            foundM = M;
        }
    }

    //console.log('maxN:', maxN, ' foundM:', foundM);
    console.log(foundM);
} 

function alternate(input) {
    let [N, A, P] = input.split('\n');
    let test = [], foundM = 0, maxN = 0, testN = 0, num = 0;
    N = parseInt(N);
    A = A.split(' ').map( (a) => { return parseInt(a); });
    A.sort( (a,b) => a-b);
    [P, Q] = P.split(' ').map( (p) => { return parseInt(p); });

    if(A[0] > Q) {
        console.log(P);
    } else if(A[N-1] < P) {
        console.log(Q);
    } else {
        let ans = -1;
        let num = -1;
        let cur = -1;

        if (A[0] > P) {
            if (ans < (A[0] - P)) {
                ans = A[0] - P;
                num = P;
            }
        }

        if (A[N-1] < Q) {
            if (ans < (Q - A[N-1])) {
                ans = Q - A[N-1];
                num = Q;
            }
        }

        // console.log('Array:', A);
        // console.log('P:', P, ' Q', Q);
        // console.log('Starting ans:', ans, 'Starting num:', num);
        for (let i = 0; i < N-1; i++) {
            cur = (A[i] + A[i+1]) / 2;

            if (cur <= Q && cur >= P && (cur - A[i]) > ans) {
                ans = cur - A[i];
                num = cur;
            } else if (cur > Q) {
                if (Q - A[i] > ans) {
                    ans = Q - A[i];
                    num = Q
                }
            } else if (cur < P) {
                if ((A[i+1] - P) > ans) {
                    ans = A[i+1] - P;
                    num = P;
                }
            }
            // console.log('i:',i,' A[i]:',A[i],' A[i+1]:',A[i+1],' ans:',ans,' num:',num,' cur:',cur)
        }

        console.log(num);
    }
} 
