class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        if (product.quantity <= this.capacity) {
            this.capacity -= product.quantity;
            this.totalCost += (product.price * product.quantity);
            this.storage.push(product);
        }
    }

    getProducts() {
        let result = '';
        for (let product of this.storage) {
            result += `${JSON.stringify(product)}\n`;
        }
        return result.trim();
    }
        
}



