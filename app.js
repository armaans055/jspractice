const myLibrary = []
currentBook = {}
const form = document.querySelector('.adder')
let rightSide = document.querySelector('.right-side')
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

    }
}

// function addBookToLibrary(){
//         let userTitle = prompt('title?')
//         let userAuthor = prompt('author?')
//         let userPages = prompt('pages?')
//         let userRead = prompt('read?')
//         myLibrary.push(new Book(userTitle, userAuthor, userPages, userRead))
// }

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);

    let currentBook = Object.fromEntries(fd)
    myLibrary.push((Object.fromEntries(fd)))
    const newBook = document.createElement("div")
    newBook.className = "bookdetails"
    newContent = document.createTextNode(currentBook.title )
    newBook.appendChild(newContent)
    newBook.innerHTML += "<br></br>"
    newContent = document.createTextNode(currentBook.author)
    newBook.appendChild(newContent)
    newBook.innerHTML += "<br></br>"
    newContent = document.createTextNode(currentBook.pages)
    newBook.appendChild(newContent)
    newBook.innerHTML += "<br></br>"
    if(currentBook.read === "read"){
        newContent = document.createTextNode("Read")
    }else{
        newContent = document.createTextNode("Unread")
    }
    newBook.appendChild(newContent)
    newBook.setAttribute("style","width: 5%")
    newBook.setAttribute("style","height: 5px")
    newBook.setAttribute("style","border: 5px solid black")
    rightSide.appendChild(newBook)
})


