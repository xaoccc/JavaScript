function crypto(input){
    let message = input[0];
    input.slice(1).forEach((line) => {
        let[command, ...other] = line.split('?');
        if (command === 'Buy') {
            console.log(message);
            process.exit();
        }

        switch (command) {
            case 'TakeEven':
                message = message.split('').filter((letter) => message.indexOf(letter) % 2 === 0).join('');
                break;
            case 'ChangeAll':
                break;
            case 'Reverse':
                break;
            
        }
    })
}

crypto((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"])
    );