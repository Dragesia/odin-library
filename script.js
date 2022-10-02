const modal = document.querySelector(".modal");
const addCard = document.querySelector(".add");
const addButton = document.querySelector(".add-js");
const cancelButton = document.querySelector(".cancel");

const bookName = document.querySelector("input[name=bookname]");
const author = document.querySelector("input[name=author]");
const pages = document.querySelector("input[name=pages]");
const read = document.querySelector("input[name=read]");

addCard.onclick = () => modal.style.display = "flex";
cancelButton.onclick = () => modal.style.display = "";

let myLibrary = [];

function addBook() {
    const newBook = new Book(bookName.value, author.value, pages.value, read.value);

    myLibrary.push(newBook);
}

function resetGrid() {
    
}

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}
