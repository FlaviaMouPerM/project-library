const form = document.querySelector(".myForm");
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".openModal");
const closeModal = document.querySelector(".closeModal");
const sendForm = document.querySelector(".sendForm");
const myLibrary = [];
let title = "",
  book="";
  author = "",
  pages = "",
  read = "";
function AddBook() {
  form.style.display = "block";
  modal.style.display = "block";
}

function CloseModal() {
  form.style.display = "none";
  modal.style.display = "none";
}

sendForm.addEventListener("click", function (event) {
  event.preventDefault();
  const id = crypto.randomUUID();
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  read = document.querySelector("input[name='read']:checked").value;
  //   console.log(`titulo: ${title},
  // autor: ${author},
  // paginas: ${pages},
  // lido: ${read}.`)
 book = new Books(id, title, author, pages, read);
  function Books(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
    };
    console.log("O que tem aqui?");
    console.log(book);
    
   myLibrary.push(book);
  });

console.log(myLibrary);
openModal.addEventListener("click", AddBook);
closeModal.addEventListener("click", CloseModal);
