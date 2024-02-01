function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    let info = `${this.title} by ${this.author}, ${this.pages} pages`
    if (!this.read) {
        info += ', not read yet'
    }
    return info
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)

console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"