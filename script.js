//dom elements
const body = document.querySelector("body");
const booksContainer = document.querySelector(".books-container");
const addButton = document.querySelector(".addButton");
const submitButton = document.querySelector(".btn");
const form = document.querySelector("#containerForm");
const popupForm = document.querySelector(".formPopup");
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

//will set ids for us
let id = (id) => document.getElementById(id);

//sets values with their key on the form
let title = id("title"),
    author = id("author"),
    pages = id("pages"),
    checkRead = id("checkRead");


function openForm() {
   booksContainer.style.opacity = "0.3";
   popupForm.style.display = "block";
}


const submitForm = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        form.reset()
         popupForm.style.display = "none";
         booksContainer.style.opacity = "1";
        console.log(form.elements.title.value);
    })
}

function deleteBook() {

}

//opens the form
addButton.addEventListener("click", openForm);
//closes the form / will also return all the values
submitButton.addEventListener("click", submitForm);





const theHobbit = new Book ("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");
console.log(theHobbit.info())