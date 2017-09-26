class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores;
    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        const avgScore = this.scores.reduce( (a,b) => a+b/2, 0);
        if (avgScore >= 90) return 'O';
        if (avgScore >= 80) return 'E';
        if (avgScore >= 70) return 'A';
        if (avgScore >= 55) return 'P';
        if (avgScore >= 40) return 'D';
        return 'T';
    }
}

const input1 = `Heraldo Memelli 8135627
2
100 80`;

runProgram(input1);
function runProgram(input) {
    let [firstLine, ...rest] = input.split('\n');
    let [firstName, lastName, id] = firstLine.split(' ');
    let numScores = parseInt(rest.shift());
    let testScores = rest.shift().split(' ').map( x => parseInt(x));

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}