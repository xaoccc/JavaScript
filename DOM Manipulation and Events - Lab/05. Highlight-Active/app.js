function focused() {
    let inputs = document.querySelectorAll('input');
    console.log(inputs);

    inputs.forEach((input) => {
        input.addEventListener('focus', function (e) {
            e.target.parentElement.classList.add('focused')            
        });
        input.addEventListener('blur', function (e) {
            e.target.parentElement.classList.remove('focused')            
        });
    })
}