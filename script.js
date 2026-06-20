const form = document.querySelector(".my-form");
const modal = document.querySelector(".modal");
const addBooks = document.querySelector(".add-books");
const closeModalEl = document.querySelector(".close-modal");
const sendForm = document.querySelector(".send-form");
const myLibrary = [];

function closeModal() {
  modal.close();
}

function openModal() {
  modal.showModal();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const id = crypto.randomUUID();
 
  const dados = new FormData(form);
  const title = dados.get("title")
  const author = dados.get("author")
  const pages = dados.get("pages")
  const read = dados.get("read")

  book = new Books(id, title, author, pages, read);
  function Books(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  myLibrary.push(book);
  console.log(myLibrary);
  form.reset();
  closeModal();
});

addBooks.addEventListener("click", openModal);
closeModalEl.addEventListener("click", closeModal                                                                         );
