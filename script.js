
//array of objects container 
let myLibrary = [];

//constructor
function Book (title, author, pages, readOrNot) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readOrNot = readOrNot 
    this.info = () => {
        return `${this.title} by ${this.author}, ${pages}, ${readOrNot}`
    }

}

function addBookToLibrary() {

}

function deleteBook() {

}



const theHobbit = new Book ("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");
console.log(theHobbit.info())