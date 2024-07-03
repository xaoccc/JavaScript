function store(stock, order) {
    let storeData = {};
    for (i=0; i<stock.length; i++) {
        if (i % 2 === 0) {
            storeData[stock[i]] = Number(stock[i + 1]);
        }
    }
    for (i=0; i<order.length; i++) {
        if (i % 2 === 0) {
            (!storeData[order[i]]) ? storeData[order[i]] = Number(order[i + 1]) : storeData[order[i]] += Number(order[i + 1]);
        }
    }

    for (let [product, qty] of Object.entries(storeData)) {
        console.log(`${product} -> ${qty}`);
    }
}

store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );