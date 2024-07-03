function movies(input) {
    let movies = [];

    for (let line of input) {
        if (line.includes('addMovie')) {
            let movieName = line.substring(9);
            movies.push({ name: movieName });
        } else if (line.includes('directedBy')) {
            let [movieName, director] = line.split(' directedBy ');
            let myMovie = movies.find(x => x.name === movieName);
            if (myMovie) {
                myMovie.director = director;
            }
        } else if (line.includes('onDate')) {
            let [movieName, date] = line.split(' onDate ');
            let myMovie = movies.find(x => x.name === movieName);
            if (myMovie) {
                myMovie.date = date;
            }
        }
    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}