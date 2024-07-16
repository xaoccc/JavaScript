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

    // 1. Use map() 
    // 1.1. entry is each element in the array
    // 1.2. We receive an array of arrays, where each element (entry) is split into an array of several elements
    // 2. Use map() again
    // 2.1. Use array destructuring [name, age] to get the variables name and age
    // 2.2. Use the variables name and age as parameters for a new object, instance of class Cat
    // 2.3. Create object for each [name, age] pair
    // 2.4. Again, store all the objects in the array
    // 3. Use forEach()
    // 3.1. For each cat object we return the class method meow() executed on the object
    input.map((entry => entry.split(' '))).map(([name, age]) => new Cat(name, age)).forEach((cat) => cat.meow());
}

// cat(['Candy 1', 'Poppy 3', 'Nyx 2']);