function bookShelf(input) {

    let library = {};

    for (let line of input) {
        if (line.indexOf('->') > -1) {
            let [shelfID, shelfGenre] = line.split(' -> ');
            if (Object.keys(library).indexOf(shelfID) === -1) {
                library[shelfID] = {};
                library[shelfID][shelfGenre] = [];
            }
   

        } else if (line.indexOf(':')) {
            let [bookTitle, bookAuthor, bookGenre] = line.split(/[:,]/);
            // console.log(bookTitle.trim(), bookAuthor.trim(), bookGenre.trim());
            for (let shelfID of Object.keys(library)) {
                if (library[shelfID]) {
                    if (Object.keys(library[shelfID])[0] === bookGenre.trim()) {
                        library[shelfID][bookGenre.trim()].push({[bookTitle.trim()]: bookAuthor.trim()});
                    }

                }
            }
            
        }
    }

    for (let shelf of Object.entries(library)) {
        // console.log(library[shelf[0]]);
        // shelf = Object.entries(shelf).sort((a,b) => Object )
        Object.values(shelf[1])[0] = Object.values(shelf[1])[0].sort((a,b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));
        // shelf[count] = Object.values(shelf)[0].reduce((a, b) => a + b, 0);
        library[shelf[0]]['booksCount'] = Object.values(shelf[1])[0].length;

    }
    // library = Object.fromEntries(Object.entries(library).sort((a,b) => console.log(Object.entries(a)[1][1].booksCount) ));
    // library = Object.fromEntries(Object.entries(library).sort((a,b) => Object.entries(a)[1][1].booksCount + Object.entries(b)[1][1].booksCount ));
    library = Object.fromEntries(Object.entries(library).sort((a, b) => {
        let countA = a[1]['booksCount'];
        let countB = b[1]['booksCount'];
        return countB - countA;
    }));


    for (let [shelfID, shelf] of Object.entries(library)) {
        let genre = Object.keys(shelf)[0];
        console.log(`${shelfID} ${genre}: ${shelf['booksCount']}`);
        for (let book of shelf[genre]) {
            let bookTitle = Object.keys(book)[0];
            let bookAuthor = book[bookTitle];
            console.log(`--> ${bookTitle}: ${bookAuthor}`);
        }
    }



    console.log(library);
}

bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Bilots of Stone: Brook Jay, history']);


