// Expected output
// Title: The Alchemist
// Author: Paulo Coelho
// Price: 248

const input1 = `The Alchemist
Paulo Coelho
248`;

class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
        }
        else {
            this.title = title;
            this.author = author;
        }
    }
    
    display() {
        console.log('Implement the \'display\' method!')
    }
}

class MyBook extends Book {
    constructor(title, author, price) {
        super(title, author);

        this.price = price;
    }

    display() {
        console.log('Title:', this.title);
        console.log('Author:', this.author);
        console.log('Price:', this.price);
    }
}

mainProgram(input1);
function mainProgram(input) {
    const [title, author, price] = input.split('\n');

    let book = new MyBook(title, author, price)
    book.display()
}