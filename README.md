# JavaScript
JavaScript basic tasks and training

JS Notes

- var: can be accesed outside the initial block and can be reassigned. DEPRECATED!
- let: cannot be accessed outside the initial block and can be reassigned
- const: cannot be accessed outside the initial block and cannot be reassigned. Used in 90% of real projects.
- var, let and const assigned in a function cannot be accessed outside of the function
- switch works only with values, not expressions, for expressions we use if-else, for values - switch

### for...in
- works with indexes

### for...of
- works with elements
- for objects we can use 
    - for [key, value] of Object.entries(myObject) - loop through keys and values
    - for key of Object.keys(myObject) - loop through keys 
    - for values of Object.values(myObject) - loop through values

### forEach 
- designed specifically for arrays
- use:
myArray.forEach(element => { result; });
- use with ternary operator:
myArray.forEach(element => { (condition) ? result if true : result if false; });

### Sorting Arrays and Objects
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

### Sorting Classes
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

### Filtering Objects
1. Convert the object into nested lists, using Object.entries(obj) [[a1, a2], [b1, b2]...[an, bn]], where a1, b1, bn are the object keys and a2, b2, bn are the values
2. Filter the data, using filter()
3. Convert the filtered list, using Object.fromEntries()
- Note that filtering objects cannot be done using Object.keys(obj) or Object.values(obj), because the result would be an array unfit for the method Object.fromEntries()
#### Example:
    let filteredObj = Object.fromEntries(Object.entries(obj).filter(([key, value]) => value % 2 !== 0));


### DOM
1. NodeList and HTMLCollection:
#### NodeList
- Definition: NodeList is a collection of nodes (elements, text nodes, etc.) returned by methods like querySelectorAll and childNodes.
- Mutability: NodeList is generally static, meaning it does not automatically update if the DOM changes after it is created.
- Methods: It supports methods like forEach and indexing to access its elements.
- Common Methods: forEach, item(index), length, and array indexing (nodeList[index]).
- Examples: Returned by querySelectorAll, childNodes, parentNode.childNodes, etc.
#### HTMLCollection
- Definition: HTMLCollection is a collection of HTML elements returned by methods like getElementsByTagName and getElementsByClassName.
- Mutability: HTMLCollection is live, meaning it updates automatically when the DOM changes.
- Methods: It supports similar methods to NodeList, but also automatically updates to reflect changes in the DOM.
- Common Methods: item(index), length, and array indexing (htmlCollection[index]).
- Examples: Returned by getElementsByTagName, getElementsByClassName, children, etc.
- You can use array methods like forEach, map, filter, etc., with an HTMLCollection as well as with an array. Although HTMLCollection is not technically an array, it behaves similarly in many respects due to its array-like nature.