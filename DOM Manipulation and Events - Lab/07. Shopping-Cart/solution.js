function solve() {
   let addButtons = document.querySelectorAll('.add-product');
   let checkoutButton = document.querySelector('.checkout');
   let shoppingCart = document.querySelector('textarea');
   let [total, items] = [0, []];

   addButtons.forEach((button) => {
      button.addEventListener('click', function(e) {
         let productPrice = Number(e.target.parentElement.nextElementSibling.textContent);
         let productName = e.target.parentElement.previousElementSibling.firstElementChild.textContent;

         shoppingCart.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
         total += productPrice;

         (items.indexOf(productName) === -1) ?  items.push(productName) : null;
      })
   })

   checkoutButton.addEventListener('click', function(e) {
      addButtons.forEach((button) => button.disabled = true);
      checkoutButton.disabled = true;
      shoppingCart.textContent += `You bought ${items.join(', ')} for ${total.toFixed(2)}.`
   })
}