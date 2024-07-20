function crypto(input){
    let message = input[0];
    input.slice(1).forEach((line) => {
        let[command, ...other] = line.split('?');
        if (command === 'Buy') {

            console.log(`The cryptocurrency is: ${message}`);
            process.exit();
        }

        switch (command) {
            case 'TakeEven':
                message = message.split('').filter((letter, index) => index % 2 === 0).join('');
                console.log(message);
                break;
            case 'ChangeAll':
                message = message.split(other[0]).join(other[1]);
                console.log(message);
                break;
            case 'Reverse':
                if (message.indexOf(other[0]) > -1) {
                    message = message.split(other[0]).join('') + other[0].split('').reverse().join('');
                    console.log(message);
                } else { console.log('error'); }
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