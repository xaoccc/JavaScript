function attachGradientEvents() {
    let result = document.getElementById('result');
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', function (e) {

        let percent = Math.floor(e.offsetX / e.target.clientWidth * 100);
        result.textContent = percent + '%';
    });

}