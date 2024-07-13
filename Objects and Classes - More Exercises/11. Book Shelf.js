function bookShelf(input) {
    let library = []

    class BookShelf {
        constructor(id, genre) {
            this.id = id;
            this.genre = genre;
            this.books = [];
            this.booksNum = 0;
        }
    }

    for (let line of input) {
        if (line.indexOf('->') > -1) {
            let [shelfID, shelfGenre] = line.split(' -> ');
            let bookShelfInLibrary = false;
            for (let shelf of library) {
                if (shelf.id === shelfID) {
                    bookShelfInLibrary = true;
                }
            }
            if (!bookShelfInLibrary) {
                let bookshelf = new BookShelf(shelfID, shelfGenre);
                library.push(bookshelf);
            }           

        } else if (line.indexOf(':')) {
            let [book, genre] = line.split(', ');
            for (let shelf of library) {
                if (shelf.genre === genre) {
                    shelf.books.push(book);
                    shelf.booksNum += 1;
                    shelf.books.sort((a, b) => a.localeCompare(b));
                }
            }
        }
    }
    library = library.sort((a, b)=> b.booksNum - a.booksNum);    
    for (let shelf of library) {
        console.log(`${shelf.id} ${shelf.genre}: ${shelf.booksNum}`);
        for (book of shelf.books) {
            console.log(`--> ${book}`);
        }
    }
}



