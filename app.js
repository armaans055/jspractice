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



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);

    let currentBook = Object.fromEntries(fd)
    myLibrary.push((Object.fromEntries(fd)))
    const newBook = document.createElement("div")
    newBook.className = "bookdetails"
    newContent = document.createTextNode(currentBook.title )
    currentTitle = currentBook.title
    newBook.appendChild(newContent)
    newBook.innerHTML += "<br></br>"
    newContent = document.createTextNode(currentBook.author)
    newBook.appendChild(newContent)
    newBook.innerHTML += "<br></br>"
    newContent = document.createTextNode(currentBook.pages + " pages")
    newBook.appendChild(newContent)
    newBook.innerHTML += "<br></br>"
    if(currentBook.read === "read"){
        newContent = document.createTextNode("Read")
    }else{
        newContent = document.createTextNode("Unread")
    }
    currentStatus = currentBook.read;
    newBook.appendChild(newContent)
    newBook.setAttribute("style","width: 5%")
    newBook.setAttribute("style","height: 5px")
    newBook.setAttribute("style","border: 5px solid black")
    rightSide.appendChild(newBook)
    const deleteButton = document.createElement("button")
    const readButton = document.createElement("button")
    readButton.className = "checkboxx"
    deleteButton.className = "deleteButton"
    newBook.appendChild(deleteButton)
    newBook.appendChild(readButton)
    deleteButton.addEventListener('click', ()=>{
        rightSide.removeChild(newBook)
    })
    readButton.addEventListener('click', ()=>{
        
    })
})


