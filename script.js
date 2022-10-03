const container = document.querySelector(".books");

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

    createBookCard(myLibrary[myLibrary.length-1]);
}

addButton.onclick = addBook;

function createBookCard(book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card", "book-card");
    bookCard.setAttribute("data-name", book.title);

    const bookInfo = document.createElement("div");
    bookInfo.classList.add("bookInfo");

    const cBookName = document.createElement("b");
    cBookName.classList.add("cBookName");
    cBookName.innerHTML = book.title;

    const cAuthor = document.createElement("b");
    cAuthor.classList.add("cAuthor");
    cAuthor.innerHTML = book.author;

    const boldText = document.createElement("b");

    const cPages = document.createElement("b");
    cPages.classList.add("cPages");
    cPages.innerHTML = book.pages;

    boldText.appendChild(cPages);

    bookInfo.appendChild(cBookName);
    bookInfo.appendChild(cAuthor);
    bookInfo.appendChild(boldText);

    bookCard.appendChild(bookInfo);

    const cardButtons = document.createElement("div");
    cardButtons.classList.add("cardButtons");

    const changeRead = document.createElement("div");
    changeRead.classList.add("changeRead");
    if (!book.isRead) {
        changeRead.classList.add("red");
        changeRead.innerHTML = "Not read"; 
    } else {
        changeRead.innerHTML = "Read";
    }

    changeRead.onclick = () => {
        changeRead.classList.toggle("red");
        if (changeRead.classList.contains("red")) {
            changeRead.innerHTML = "Not read";
        } else {
            changeRead.innerHTML = "Read";
        }
    }

    const removeBtn = document.createElement("div");
    removeBtn.classList.add("remove");
    removeBtn.innerHTML = "Remove";

    removeBtn.onclick = () => {
        if (myLibrary.length != 0) {
            console.log("xD");
            const index = myLibrary.findIndex(obj => {
                return obj.title === book.title;
            });
            myLibrary.splice(index, 1);
            container.removeChild(bookCard);
        }
    }

    cardButtons.appendChild(changeRead);
    cardButtons.appendChild(removeBtn);

    bookCard.appendChild(cardButtons);

    container.appendChild(bookCard);
}

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}
