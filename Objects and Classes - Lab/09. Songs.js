function printSongs(songsArr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];

    songsArr = Number(songsArr.shift());
    let typeSong = songsArr.pop();

    for (let song of songsArr) {
        let [typeListSong, nameSong, timeSong] = song.split('_');
        let newSong = new Song(typeListSong, nameSong, timeSong);
        songs.push(newSong);
    }

    if (typeSong === "all") {
        songs.forEach(s => console.log(s.name));
    } else {
        let filteredSongs = songs.filter(s => s.typeList === typeSong);
        filteredSongs.forEach(s => console.log(s.name));
    }
}





    