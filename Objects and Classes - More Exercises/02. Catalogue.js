function catalogue(products) {
    let productsData = {};
    let letters = [];
    products.forEach((product) => productsData[product.split(' : ')[0]] = [product.split(' : ')[0][0], product.split(' : ')[1]]);
    productsData = Object.entries(productsData).sort((a, b) => a[0].localeCompare(b[0]));
    for (let product of productsData) {
        if (!letters.find((letter) => letter === product[1][0])) {
            console.log(product[1][0]);
            letters.push(product[1][0]);
        }        
        console.log(`  ${product[0]}: ${product[1][1]}`);
    }
}
