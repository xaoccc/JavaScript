function cat(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    for (let i = 0; i < input.length; i++) {
        let [name, age] = input[i].split(' ');
        cats.push(new Cat(name, age));
    }

    cats.forEach(cat => cat.meow());
}

