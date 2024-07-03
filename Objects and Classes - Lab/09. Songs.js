class Song {
    constructor(type, name, time) {
        this.type = type;
        this.name = name;
        this.time = time;
    }
}

let songs = [];
let songsNum = input.shift();

for (i=0; i<songsNum; i++) {
    let [type, name, time] = input[i].split('_');
    songs.push(new Song(type, name, time));
}

for (let s of songs) {
    if (input[input.length - 1] === 'all') {
        console.log(s.name);
    } else if (input[input.length - 1] === s.type) {
        console.log(s.name);
    }    
}    





    