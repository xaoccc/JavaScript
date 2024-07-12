function comments(input) {
    let allArticles = {};
    let users = new Set();
    let articlesSet = new Set();

    for (let line of input) {
        if (line.includes('user')) {
            let user = line.split(' ')[1];
            users.add(user);
        } else if (line.includes('article')) {
            let article = line.split(' ')[1];
            allArticles[article] = [];
            articlesSet.add(article);
        } else {

            let [userName, article] = line.split(': ')[0].split(' posts on ');
            let comment = line.split(': ')[1];
            
            if (users.has(userName) && articlesSet.has(article)) {
                allArticles[article].push({[userName]: comment});
            }
        }
    }   
    
    allArticles = Object.fromEntries(Object.entries(allArticles).sort((a, b) => b[1].length - a[1].length));

    for (let [subject, comments] of Object.entries(allArticles)) {
        console.log(`Comments on ${subject}`);

        comments.sort((a, b) => {
            let keyA = Object.keys(a)[0];
            let keyB = Object.keys(b)[0];
            return keyA.localeCompare(keyB);
          });

        for (let comment of comments) {
             console.log(`--- From user ${Object.entries(comment)[0][0]}: ${Object.entries(comment)[0][1].replace(',', ' -')}`);
        }
    }
    
}

