const myLibrary = [];
const addButton = document.querySelector('.addButton');
const books = document.querySelector('#books');

function Book(name, author, pageCount) {
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
}

function createForm() {
    const form = document.createElement('form');
    const name = createFormDiv("bookName", "Name", "text");
    const author = createFormDiv("authorName", "Author", "text");
    const pageCount = createFormDiv("pageCount", "Pages", "number");

    form.appendChild(name);
    form.appendChild(author);
    form.appendChild(pageCount);

    return form;
}

function addBookToLibrary(name, author, pageCount) {
    let book = new Book(name, author, pageCount);
    myLibrary.push(book);
}

addButton.addEventListener('click', function() {
    console.log("Button was Clicked");
});

function createFormDiv(id, labelName, inputType) {
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

console.log(createForm());

