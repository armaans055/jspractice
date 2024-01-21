console.log("script test")

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            return `Hello, the book is ${this.title}, the author is ${this.author} it has ${this.pages} pages, and I ${this.read} read it`
        };
    }
}

const harryPotter = new Book('Harry Potter', 'JK Rolling', '98', 'have')