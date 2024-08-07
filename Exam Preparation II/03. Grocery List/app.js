function solve() {
    const rootUrl = 'http://localhost:3030/jsonstore/grocery/';
    const container = document.querySelector('#tbody');
    const loadProductsBtn = document.querySelector('#load-product');
    const addProductBtn = document.querySelector('#add-product');
    const updateProductBtn = document.querySelector('#update-product');
    const [productName, productQty, productPrice] = document.querySelectorAll('#signup input');

    function createChild(tag, parent, classes, text, id) {
        let element = document.createElement(tag);
        (parent) ? parent.appendChild(element) : null;
        (classes) ? element.classList.add(...classes) : null;
        (text) ? element.textContent = text : null;
        (id) ? element.id = id : null;
        return element;
    }

    function createProductEntry(name, qty, price, id) {
        const tr = createChild('tr', container);
        createChild('td', tr, ['name'], name);
        createChild('td', tr, ['count-product'], qty);
        createChild('td', tr, ['product-price'], price);
        const button = createChild('td', tr, ['btn'], '', id);
        updateBtn = createChild('button', button, ['update'], 'Update');
        deleteBtn = createChild('button', button, ['delete'], 'Delete');
        updateProduct(updateBtn);
        deleteProduct(deleteBtn);        
    }

    // LOAD ALL PODUCTS
    function loadProducts() {
        fetch(rootUrl)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            container.innerHTML = '';
            for (entry in data) {
                createProductEntry(data[entry].product, data[entry].count, data[entry].price, data[entry]._id);                
            }
            
        })
        .catch(error => console.log(error));
    }

    // ADD PRODUCT
    function addProduct() {
        if (![productName, productQty, productPrice].some((input) => !input.value.trim())) {
            fetch(rootUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product: productName.value,
                    count: productQty.value,
                    price: productPrice.value
                })
            })
            .then((result) => result.json())
            .then((data) => {
                createProductEntry(data.product, data.count, data.price, data._id);
            })
            .catch(error => console.log(error));
    
            productName.value = '';
            productQty.value = '';
            productPrice.value = ''; 
        }
              
    }

    // DELETE PRODUCT
    function deleteProduct(btn) {
        btn.addEventListener('click', (e) => {                    
                
            fetch(`${rootUrl}${e.target.parentElement.id}`, {
                method: 'DELETE'
            })
            .catch(error => console.log(error));
            e.target.parentElement.parentElement.remove();

        });

    }

    function updateProduct(btn) {
        btn.addEventListener('click', (e) => { 
            updateProductBtn.disabled = false;                   
            addProductBtn.disabled = true;
            
            
            const dataToEdit = e.target.parentElement.parentElement.children;
            
            productName.value = dataToEdit[0].textContent;
            productQty.value = dataToEdit[1].textContent;
            productPrice.value = dataToEdit[2].textContent; 

            updateProductBtn.addEventListener('click', (event) => {
                event.preventDefault();
                console.log(e.target.parentElement.id)
                fetch(`${rootUrl}${e.target.parentElement.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        product: productName.value,
                        count: productQty.value,
                        price: productPrice.value
                    })
    
                })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch(error => console.log(error));
                // loadProducts();
                productName.value = '';
                productQty.value = '';
                productPrice.value = ''; 

                updateProductBtn.disabled = true;                   
                addProductBtn.disabled = false; 

            });
                
            

        });

    }

    

    loadProductsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadProducts();
    });

    addProductBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addProduct();
        loadProducts();
    });

}

window.addEventListener('load', solve);