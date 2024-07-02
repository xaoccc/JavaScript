function loadingBar(num) {
    let loadingBar = new Array(10).fill('.');
    (num / 10 === 10) ? console.log(`100% Complete!\n[${'%'.repeat(10)}]`) : console.log(`${num}% [${loadingBar.fill('%', 0, num / 10).join('')}]\nStill loading...`);
}

loadingBar(66);