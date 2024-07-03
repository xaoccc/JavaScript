# JavaScript
JavaScript basic tasks and training

JS Notes

- var: can be accesed outside the initial block and can be reassigned
- let: cannot be accessed outside the initial block and can be reassigned
- const: cannot be accessed outside the initial block and cannot be reassigned
- var, let and const assigned in a function cannot be accessed outside of the function
- switch works only with values, not expressions, for expressions we use if-else, for values - switch

### forEach loop
- designed specifically for arrays
- use:
myArray.forEach(element => { result; });
- use with ternary operator:
myArray.forEach(element => { (condition) ? result if true : result if false; });

### Sorting
- it works only for arrays:
- if we want to sort an object, we can convert it to an array

1. Numeric sort
- ascending:
let mySortedArray = Object.entries(myObject).sort((a, b) => a[0] - b[0]);
- descending:
let mySortedArray = Object.entries(myObject).sort((a, b) => b[0] - a[0]);
2. String sort
- ascending:
let mySortedArray = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));
- descending:
let mySortedArray = Object.entries(addressBook).sort((a, b) => b[0].localeCompare(a[0]));


- a[0]/b[0] is the key, a[1]/b[1] would be the value
- we can sort either by key or by value. Key are unique, so it makes no sense in sorting by both keys and values
- for nested arrays would be a[0...n]/b[0...n] - 0...n is the index of the element we would like to sort

### Classes
a[0]/b[0] can be replaced with a.classProperty/b.classProperty:

let sortedClassInstancesList = ClassInstancesList.sort((a, b) => {
    // String! Sort by firstProperty (ascending)
    let firstPropertyComparison = a.firstProperty.localeCompare(b.firstProperty);
    if (firstPropertyComparison !== 0) return firstPropertyComparison;

    // Number! If firstProperties are equal, sort by secondProperty (descending)
    let secondPropertyComparison = b.secondProperty - a.secondProperty;
    if (secondPropertyComparison !== 0) return secondPropertyComparison;

    // Number! If secondProperties are equal, sort by trirdProperty (ascending)
    return a.trirdProperty - b.trirdProperty;
});