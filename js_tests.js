


function asyncFn(callback) {
    setTimeout(() => {
        callback();
    }, 8000)
}

function anotherAsyncFn(callback) {
    setTimeout(() => {
        callback();
    }, 3500)
}


function oneMoreAsyncFn(callback) {
    setTimeout(() => {
        callback();
    }, -1000)
}

console.log('start');
oneMoreAsyncFn(() => console.log('test3'))
anotherAsyncFn(() => console.log('test2'))
asyncFn(() => console.log('test1'));


let myList = '1 - 2 - 3 - 4'
console.log(myList.split(' - ').shift())
console.log(myList.split(' - '))
