function pianist(input) {
    const piecesNum = Number(input[0]);
    let pieces = [];
    input.slice(1, piecesNum + 1).map((line) => {
        let[pieceName, composer, key] = line.split('|');
        pieces.push({pieceName, composer, key});
    });
    
    input.slice(piecesNum + 1).forEach(line => {
        if (line === 'Stop') { 
            pieces.forEach((piece) => console.log(`${piece.pieceName} -> Composer: ${piece.composer}, Key: ${piece.key}`));
            process.exit(); 
        } else {
            let [command, ...other] = line.split('|');
             switch (command) {                
                case 'Add':  
                    let [pieceName, composer, key] = other;                 
                    if (pieces.some((element) => element.pieceName === pieceName)) {
                        console.log(`${pieceName} is already in the collection!`) 
                     } else { 
                        console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);
                        pieces.push({pieceName, composer, key});
                    }
                    break;
                case 'Remove':
                    let [pieceToRemove] = other;
                    let indexToRemove = pieces.findIndex(element => element.pieceName === pieceToRemove);
                    if (indexToRemove !== -1) {
                        pieces.splice(indexToRemove, 1);
                        console.log(`Successfully removed ${pieceToRemove}!`);                        
                     } else { 
                        console.log(`Invalid operation! ${pieceToRemove} does not exist in the collection.`);
                    }
                    break;
                case 'ChangeKey':
                    let [pieceToChange, keyToChange ] = other;
                    let indexToChange = pieces.findIndex(element => element.pieceName === pieceToChange);
                    if (indexToChange !== -1) {
                        pieces[indexToChange].key = keyToChange;
                        console.log(`Changed the key of ${pieceToChange} to ${keyToChange}!`);                        
                     } else { 
                        console.log(`Invalid operation! ${pieceToChange} does not exist in the collection.`);
                    }
                    break;
            }
        }
    });
}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  );