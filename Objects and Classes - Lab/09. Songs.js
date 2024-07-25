function printSongs(songsArr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];

    songsArr.shift();
    let typeSong = songsArr.pop();

    for (let song of songsArr) {
        let [typeListSong, nameSong, timeSong] = song.split('_');
        let newSong = new Song(typeListSong, nameSong, timeSong);
        songs.push(newSong);
    }

    (typeSong === "all") ? songs.forEach(s => console.log(s.name)) : songs.filter(s => s.typeList === typeSong).forEach(s => console.log(s.name));
    
}





    