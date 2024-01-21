const myLibrary = []

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

    }
}

function addBookToLibrary(){
        let userTitle = prompt('title?')
        let userAuthor = prompt('author?')
        let userPages = prompt('pages?')
        let userRead = prompt('read?')
        myLibrary.push(new Book(userTitle, userAuthor, userPages, userRead))
}


