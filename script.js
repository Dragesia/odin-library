const container = document.querySelector(".books");
const form = document.querySelector(".add-page");

const modal = document.querySelector(".modal");
const addCard = document.querySelector(".add");
const addButton = document.querySelector(".add-js");
const cancelButton = document.querySelector(".cancel");

const bookName = document.querySelector("input[name=bookname]");
const author = document.querySelector("input[name=author]");
const pages = document.querySelector("input[name=pages]");
const read = document.querySelector("input[name=read]");

const bookCountText = document.querySelector("#books");
const booksReadText = document.querySelector("#booksread");
const totalPagesText = document.querySelector("#pages");

let bookCount = 0;
let booksRead = 0;
let totalPages = 0;

addCard.onclick = () => modal.style.display = "flex";
cancelButton.onclick = () => modal.style.display = "";

let myLibrary = [];

function addBook() {
    if (!form.checkValidity()) return;

    bookCount++;
    bookCountText.innerHTML = bookCount;

    totalPages += pages.value - 0;
    totalPagesText.innerHTML = totalPages;

    if (read.checked) {
        booksRead++;
        booksReadText.innerHTML = booksRead;
    }


    const newBook = new Book(bookName.value, author.value, pages.value, read.checked);

    myLibrary.push(newBook);

    createBookCard(myLibrary[myLibrary.length-1]);

    form.reset();
    modal.style.display = "";

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
        const index = myLibrary.findIndex(obj => {
            return obj.title === book.title;
        });
        if (changeRead.classList.contains("red")) {
            booksRead--;
            booksReadText.innerHTML = booksRead;
            changeRead.innerHTML = "Not read";
            myLibrary[index].isRead = false;
        } else {
            booksRead++;
            booksReadText.innerHTML = booksRead;
            changeRead.innerHTML = "Read";
            myLibrary[index].isRead = true;
        }
    }

    const removeBtn = document.createElement("div");
    removeBtn.classList.add("remove");
    removeBtn.innerHTML = "Remove";

    removeBtn.onclick = () => {
        if (myLibrary.length != 0) {
            bookCount--;
            bookCountText.innerHTML = bookCount;

            const index = myLibrary.findIndex(obj => {
                return obj.title === book.title;
            });

            totalPages -= myLibrary[index].pages;
            totalPagesText.innerHTML = totalPages;

            if (myLibrary[index].isRead) {
                booksRead--;
                booksReadText.innerHTML = booksRead;
            }
            myLibrary.splice(index, 1);
            container.removeChild(bookCard);
        }
    }

    cardButtons.appendChild(changeRead);
    cardButtons.appendChild(removeBtn);

    bookCard.appendChild(cardButtons);

    container.insertBefore(bookCard, addCard);
}

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}
