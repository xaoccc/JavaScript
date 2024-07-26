function addItem() {
    let inputs = document.querySelectorAll('input[type="text"]');
    let dropDown = document.querySelector('#menu');
    dropDown.appendChild(document.createElement('option'));
    dropDown.lastElementChild.textContent = Array.from(inputs).map((input) => input.value).join(': ');
    inputs.forEach((input) => input.value='');
}