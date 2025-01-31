const myLibrary = [];

function Book(name, author, pageCount) {
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
}

function addBookToLibrary(name, author, pageCount) {
    let book = new Book(name, author, pageCount);
    myLibrary.push(book);
}

addBookToLibrary("book", "khalid", 100);
console.log(myLibrary);