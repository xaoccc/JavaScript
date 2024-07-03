function phonebookData(entries) {
    let phonebook = {};
    for (let entry of entries) {
        entry = entry.split(' ');
        let [name, phone] = [entry[0], entry[1]];
        phonebook[name] = phone;
    }
    for (let [name, phone] of Object.entries(phonebook)) {
        console.log(`${name} -> ${phone}`);
    }
}


phonebookData(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   );