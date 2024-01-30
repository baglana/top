function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        let str = `${this.title} by ${this.author}, ${pages} pages`
        if (!read) {
            str += ', not read yet'
        }
        return str
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)

console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
