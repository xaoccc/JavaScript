function cookingByNumbers(...args) {
    let number = Number(args[0]);

    for (let i = 1; i < args.length; i++) {
        switch (args[i]) {
            case 'chop':
                number /= 2;
                console.log(number);
                continue;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                continue;
            case 'spice':
                number++;
                console.log(number);
                continue;
            case 'bake':
                number *= 3;
                console.log(number);
                continue;
            case 'fillet':
                number -= number * 0.2;
                console.log(number);
                continue;
        }        
    }
}
