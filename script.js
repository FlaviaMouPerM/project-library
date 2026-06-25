const form = document.querySelector(".my-form");
const modal = document.querySelector(".modal");
const addBooks = document.querySelector(".add-books");
const closeModalEl = document.querySelector(".close-modal");
const sendForm = document.querySelector(".send-form");
const cards = document.querySelector(".cards");
const readBooks = document.querySelector(".read-books");
const toRead = document.querySelector(".to-read");
const btnDelete = document.querySelector(".delete-card");
const myLibrary = [];
if (btnDelete) {
  btnDelete.addEventListener("click", deliteCard);
}
function closeModal() {
  modal.close();
}

function openModal() {
  modal.showModal();
}
function deliteCard(e) {
  const cardArticle = e.target.closest(".article-cards");
  const idDoCard = cardArticle.dataset.id;
   const indice = myLibrary.findIndex(card => card.id === idDoCard );
   console.log("o indice do carde é: ", indice);
}

function creatNewCard() {
  cards.innerHTML = "";

  for (let i = 0; i <= myLibrary.length; i++) {
    //criando article atribuindo id e class
    const article = document.createElement("article");
    article.classList.add("article-cards");
    
       
    //criando header atribuindo class
    const headerArticle = document.createElement("header"); 
    headerArticle.classList.add("top-of-article"); 
    
    // criando  titulo atribuindo class
    const title = document.createElement("h1"); 
    title.textContent = myLibrary[i].title; 
     
    // criando section do card
    const cardSection = document.createElement("section"); 
    cardSection.classList.add("cards-section"); 
      
    // criando Paragrafo do autor do livro
    const author = document.createElement("p"); 
    author.classList.add("author"); 
    author.textContent = myLibrary[i].author; 
    
    // criando numero de paginas
    const pages = document.createElement("p"); 
    pages.classList.add("pages"); 
    pages.textContent = myLibrary[i].pages; 
    
    // criando div para estilo e separação
    const cardStyles = document.createElement("div"); 
    cardStyles.classList.add("card-styles"); 
     
    // criando div para estilo e separação
    const div = document.createElement("div"); 
    
    // criando paragrafo para apresentar as mensagens lidas ou não/ atribuindo class 
    const reading = document.createElement("p"); 
    reading.classList.add("reading"); 
    reading.textContent = myLibrary[i].read; 
   
    // criando div para estilo e separação
    const btn = document.createElement("div"); 
    btn.classList.add("btn"); 
    
    // criando botao que apaga o card
    const btnDeliteCard = document.createElement("button");
    btnDeliteCard.classList.add("delete-card"); 
    btnDeliteCard.addEventListener("click", deliteCard);

    cards.appendChild(article);
    article.appendChild(headerArticle);
    headerArticle.appendChild(title);
    article.appendChild(cardSection);
    cardSection.appendChild(author);
    cardSection.appendChild(pages);

    article.appendChild(cardStyles);
    cardStyles.appendChild(div);
    div.appendChild(reading);
    cardStyles.appendChild(btn);
    btn.appendChild(btnDeliteCard);
  }
}
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const dados = new FormData(form);
  const title = dados.get("title");
  const author = dados.get("author");
  const pages = dados.get("pages");
  const read = dados.get("read");

  const book = new Books(title, author, pages, read);
  function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  myLibrary.push(book);
  console.log(myLibrary);
  // for(let i=0; i<=myLibrary.length;i++){
  //   console.log(myLibrary[i].read)
  // }
  form.reset();
  closeModal();
  creatNewCard();
});

addBooks.addEventListener("click", openModal);
closeModalEl.addEventListener("click", closeModal);
