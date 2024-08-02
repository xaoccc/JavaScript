function getInfo() {
    const buses = document.querySelector('#buses');

    fetch('http://localhost:3030/data').then(response => response.json())

}