function colorize() {
    let addColorElements = document.querySelectorAll('tr');
    for (i=1; i<addColorElements.length; i+=2) {
        addColorElements[i].style.background = 'teal';
    }
}