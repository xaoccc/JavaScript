function shopping(input) {
    items = input[0].split('!');
    let end = false;
    
    input.slice(1).forEach((line) => {
        let [command, item, newItem] = line.split(' ');
        if (end) { return; }
        switch (command) {
            case 'Urgent':
                if (items.indexOf(item) === -1){
                    items.splice(0, 0, item); 
                }
                break;
            case 'Unnecessary':
                const indexToRemove = items.indexOf(item);
                if (indexToRemove !== -1){
                    items.splice(indexToRemove, 1);             
                }
                break;
            case 'Correct':
                const indexToReplace = items.indexOf(item);
                if (indexToReplace !== -1){
                    items.splice(indexToReplace, 1, newItem);             
                }
                break;
            case 'Rearrange':
                const indexToMove = items.indexOf(item);
                if (indexToMove !== -1){
                    items.splice(indexToMove, 1);
                    items.push(item);                             
                }
                break;
            case 'Go':
                end = true;
                break;
        }
    })
    console.log(items.join(', '));
}
