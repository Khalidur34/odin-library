const myLibrary = [];
const addButton = document.querySelector('.addButton');
const books = document.querySelector('#books');

function Book(name, author, pageCount) {
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
}

function addBookToLibrary(name, author, pageCount) {
    let book = new Book(name, author, pageCount);
    myLibrary.push(book);
}

addButton.addEventListener('click', function() {
    const formDiv = createFormDiv();
    books.appendChild(formDiv);
    formDiv.addEventListener('submit', function(e) {
        e.preventDefault();
        //console.log(document.querySelector('[name = "bookName"]').value);
        bookName = document.querySelector('[name = "bookName"]').value ;
        authorName = document.querySelector('[name = "authorName"]').value;
        pageCount = document.querySelector('[name = "pageCount"]').value;

        let book = createBookDiv(bookName, authorName, pageCount);
        books.removeChild(formDiv);
        books.insertBefore(book, books.firstChild);
    });    
});

function createFormFieldDiv(id, labelName, inputType) {
    const formDiv = document.createElement('div');
    
    const label = document.createElement('label');
    label.setAttribute("for", id);
    label.textContent = labelName;
    
    const input = document.createElement('input');
    input.setAttribute("type", inputType);
    input.setAttribute("name", id);
    input.setAttribute("id", id);

    formDiv.appendChild(label);
    formDiv.appendChild(input);

    return formDiv;
}

function createFormDiv() {
    const formDiv = document.createElement('div');
    const form = document.createElement('form');
    const name = createFormFieldDiv("bookName", "Book Name", "text");
    const author = createFormFieldDiv("authorName", "Author", "text");
    const pageCount = createFormFieldDiv("pageCount", "Pages", "number");

    form.appendChild(name);
    form.appendChild(author);
    form.appendChild(pageCount);

    const buttonDiv = document.createElement('div');
    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Create';
    buttonDiv.appendChild(button);
    form.appendChild(buttonDiv);

    formDiv.classList.add('card', 'form');
    formDiv.appendChild(form);

    return formDiv;
}

function createBookDiv(bookName, authorName, pageCount) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardName = document.createElement('div');
    cardName.textContent = bookName;
    const cardAuthor = document.createElement('div');
    cardAuthor.textContent = authorName;
    const cardPageCount = document.createElement('div');
    cardPageCount.textContent = pageCount;

    card.appendChild(cardName);
    card.appendChild(cardAuthor);
    card.appendChild(cardPageCount);

    return card;
}

