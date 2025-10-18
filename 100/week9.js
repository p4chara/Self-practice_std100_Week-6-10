// Lesson 3 - Events Starter

let quotes = []

// Select DOM elements
const quoteList = document.querySelector('section#quote-list')
const form = document.querySelector('form#quoteForm')
const contentInput = document.querySelector('input#content')
const authorInput = document.querySelector('input#author')
const idInput = document.querySelector('input#quoteId')
const randomBtn = document.querySelector('button#randomBtn')
const randomDisplay = document.querySelector('div#randomQuoteDisplay')

function createQuoteElement(quote) {
  const div = document.createElement('div')
  div.dataset.id = String(quote.id);
  // a quote element example
  //<section id="quote-list">
  //  <div data-id="1">
  const pContent = document.createElement('p')
  pContent.textContent = quote.content;
  //    <p>Confidence comes from discipline and training</p>
  const pAuthor = document.createElement('p')
  pAuthor.textContent = quote.author;
  //    <p>Robert</p>
  const editbtn = document.createElement('button')
  editbtn.className = "edit-btn"
  editbtn.dataset.id = String(quote.id)
  editbtn.textContent = "Edit"
  //    <button class="edit-btn" data-id="1">
  //      Edit
  //    </button>
  const deletebtn = document.createElement('button')
  deletebtn.className = "delete-btn"
  deletebtn.dataset.id = String(quote.id)
  deletebtn.textContent = "Delete"
  //    <button class="delete-btn" data-id="1">
  //      Delete
  //    </button>
  //  </div>
  // </section>
  div.appendChild(pContent)
  div.appendChild(pAuthor)
  div.appendChild(editbtn)
  div.appendChild(deletebtn)
  return div
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  quoteList.appendChild(createQuoteElement(quote))
}

function updateQuoteInDOM(quote) {
  const node = quoteList.querySelector(`[data-id="${quote.id}"]`);
  const [pContent,pAuthor] = node.querySelectorAll('p')
  if (pContent) {
    pContent.textContent = quote.content
  }
  if(pAuthor){
    pAuthor.textContent = quote.author
  }
}
function deleteQuoteFromDOM(id) {
  const node = quoteList.querySelector(`[data-id="${id}"]`)
  node.remove()
}
function renderQuotes() {
  quoteList.innerHTML = ""
  quotes.forEach(e => {
    addQuoteToDOM(e)
  })
}
function showRandomQuote() {
  if(quotes.length === 0) {
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  randomDisplay.textContent = `"${quote.content}" — ${quote.author}`;
}

// Event listeners for form submission, edit, and delete clicks

form.addEventListener('submit',(e) => {
  e.preventDefault()
  const content = contentInput.value.trim()
  const author = authorInput.value.trim()
  const editingId = idInput.value.trim();

  if(!content || !author){
    return ;
  }
  const idNum = Number(editingId);
  const idx = quotes.findIndex(q => q.id === idNum);
  if (idx !== -1) {
    quotes[idx] = { id: idNum, content, author }
    updateQuoteInDOM(quotes[idx]);
  } else {  
    const newQuote = {
    id: quotes.length ? Math.max(...quotes.map(q => q.id)) + 1 : 1,
    content,
    author
    }
    quotes.push(newQuote);
    addQuoteToDOM(newQuote);
  };



  form.reset()
});

quoteList.addEventListener("click", (e) => {
  const target = e.target;
  if (!(target instanceof HTMLElement)) return;

  // Delete
  if (target.classList.contains("delete-btn")) {
    const id = Number(target.dataset.id);
    quotes = quotes.filter(q => q.id !== id);
    deleteQuoteFromDOM(id);
    return;
  }

  // Edit (populate form)
  if (target.classList.contains("edit-btn")) {
    const id = Number(target.dataset.id);
    const q = quotes.find(q => q.id === id);
    if (!q) return;
    contentInput.value = q.content;
    authorInput.value = q.author;
    idInput.value = String(q.id);;
  }
});

randomBtn.addEventListener("click", showRandomQuote);

// Initial render
renderQuotes();
showRandomQuote(); 