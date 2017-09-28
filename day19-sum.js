
console.log(sum(16)); // expected answer 31
function sum(n){
    n = parseInt(n);
    if (n == 1) return 1;

    let divisor = 1;
    let answer = 0;
    let returnAnswer = 0;

    do {
        // divisor++;
        answer = n / divisor;
        if (answer%1 == 0) returnAnswer += (divisor == answer) ? answer : divisor + answer;
        console.log(divisor, answer, returnAnswer)
        

    } while (++divisor < answer)

    return returnAnswer;
}