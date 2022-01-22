//dom elements
const body = document.querySelector("body");
const booksContainer = document.querySelector(".books-container");
const addButton = document.querySelector(".addButton");
const form = document.querySelector("#containerForm");
const popupForm = document.querySelector(".formPopup");

//get all the cards
//get the last one
const allNodes = document.querySelectorAll(".card-container");
const lastAddedNode = allNodes[allNodes.length - 1];

//array of objects container 
let myLibrary = [];

//constructor
function Book (title, author, pages, readOrNot) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readOrNot = readOrNot,
    this.info = () => {
        return `${this.title} by ${this.author}, ${pages}, ${readOrNot}`
    }
}


function addBookToLibrary(titleAdd, authorAdd, pagesAdd, readCheckAdd) {
        
    //create a new Book object
    const newBookAdded = new Book (titleAdd, authorAdd, pagesAdd, readCheckAdd);

    //push it to the array
    myLibrary.push(newBookAdded);

    console.log(newBookAdded.info())
    console.log(myLibrary)
   
    //query through array
    //forEach item in the array, it should output the object to the ui

    myLibrary.forEach((obj, index) => {
            //output the title
            console.log(this)
            //author
            //pages
            //if it's checked or not
            //the toggle button
            //the remove button       

    });



    
    let cardContainerDiv = document.createElement("div");
    let libraryCardUl = document.createElement("ul");
    let titleLi = document.createElement("li");
    let authorLi= document.createElement("li");
    let pagesLi = document.createElement("li");
    let readButton = document.createElement("button");
    let removeButton = document.createElement("button");
    
    //append them
    booksContainer.appendChild(cardContainerDiv);
    cardContainerDiv.appendChild(libraryCardUl);
    libraryCardUl.appendChild(titleLi);
    libraryCardUl.appendChild(authorLi);
    libraryCardUl.appendChild(pagesLi);
    libraryCardUl.appendChild(readButton);
    libraryCardUl.appendChild(removeButton);
    
    //set attributes
    cardContainerDiv.setAttribute("class", "card-container");
    libraryCardUl.setAttribute("class", "library-card");
    titleLi.setAttribute("data-title", "title") 
    authorLi.setAttribute("data-author", "author");
    pagesLi.setAttribute("data-pages", "pages"); 
    readButton.setAttribute("class", "notRead");
    readButton.setAttribute("id", "hover");
    removeButton.setAttribute("class", "remove");
    removeButton.setAttribute("id", "hover");

    //query for the values
    const addedTitle = lastAddedNode.querySelector("li[data-title=title]");
    const addedAuthor = lastAddedNode.querySelector("li[data-author=author]");
    const addedPages = lastAddedNode.querySelector("li[data-pages=pages]");
    const addedToggleButton= lastAddedNode.querySelector(".notRead");
    const addedRemoveButton = lastAddedNode.querySelector("remove");
    console.log(addedTitle)
    //set the values from the myLibrary array to ui 

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

//global variables for every iteration of the form submit
let titleTemp;
let authorTemp;
let pagesTemp;
let readCheck;

const submitForm = (e) => {
        //dont't run until all requirements met
        e.preventDefault();


        //set the values
        titleTemp = form.title.value;
        authorTemp = form.author.value;
        pagesTemp = form.pages.value;
        readCheck;
        if (form.checkRead.checked){
            readCheck = true
        } else {
            readCheck = false;
        }

        //add Book to object
        addBookToLibrary(titleTemp,authorTemp,pagesTemp,readCheck);

        //close form
         popupForm.style.display = "none";
         booksContainer.style.opacity = "1";

        //clear values
        titleTemp = "";
        authorTemp = "";
        pagesTemp = "";
        readCheck = false;
        
        //reset form input values
        form.reset()
}


function deleteBook() {

}

//opens the form
addButton.addEventListener("click", openForm);
//closes the form / will also return all the values
form.addEventListener("submit", submitForm);




