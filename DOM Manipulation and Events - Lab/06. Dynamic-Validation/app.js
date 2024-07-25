function validate() {
    console.log('TODO:...');
    let input = document.querySelector('input');
    let pattern = /^[a-z]+@\w+.{1}[a-z]+$/

    input.addEventListener('change', function(e) {
        (!input.value.match(pattern)) ? input.classList.add('error') : input.classList.remove('error');
    })
}