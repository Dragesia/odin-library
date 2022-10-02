const modal = document.querySelector(".modal");
const addCard = document.querySelector(".add");
const addButton = document.querySelector(".add-js");
const cancelButton = document.querySelector(".cancel");

addCard.onclick = () => modal.style.display = "flex";
cancelButton.onclick = () => modal.style.display = "";

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}
