// function store(stock, order) {
//     let storeData = {};
//     for (i=0; i<stock.length; i++) {
//         if (i % 2 === 0) {
//             storeData[stock[i]] = Number(stock[i + 1]);
//         }
//     }
//     for (i=0; i<order.length; i++) {
//         if (i % 2 === 0) {
//             (!storeData[order[i]]) ? storeData[order[i]] = Number(order[i + 1]) : storeData[order[i]] += Number(order[i + 1]);
//         }
//     }

//     for (let [product, qty] of Object.entries(storeData)) {
//         console.log(`${product} -> ${qty}`);
//     }
// }

function store(stock, order) {
    let store = stock.reduce((obj, currentItem, index) => {      
        (index % 2 === 0) ? obj[currentItem] = parseInt(stock[index + 1], 10) : null;
        return obj;
    }, {})
    
    order.reduce((_, currentItem, index) => {
        if (store.hasOwnProperty(currentItem) && !parseInt(currentItem)) {          
            store[currentItem] += parseInt(order[index + 1], 10);
        } else if (!parseInt(currentItem)) {
            store[currentItem] = parseInt(order[index + 1], 10);
        }
    }, {})
    
    Object.keys(store).forEach((product) => console.log(`${product} -> ${store[product]}`));
    
}

store([
    'Chips', '5', 'CocaCola', '9', 'CocaCola', '2', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );