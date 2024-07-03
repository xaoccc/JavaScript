function meetings(entries) {
    let notebook = {};
    for (let entry of entries) {
        entry = entry.split(' ');
        let [day, name] = [entry[0], entry[1]];

        if (!notebook[day]) {
            notebook[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    for (let [day, name] of Object.entries(notebook)) {
        console.log(`${day} -> ${name}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
   );