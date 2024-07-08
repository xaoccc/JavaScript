function toggle() {
    let buttonText = document.querySelector('#accordion .head .button').textContent;
    let moreInfoShow = document.querySelector('#extra');

    if (buttonText === 'More') {
        moreInfoShow.style.display = 'block'; 
        document.querySelector('#accordion .head .button').textContent = 'Less';
    } else if (buttonText === 'Less') {
        moreInfoShow.style.display = 'none';
        document.querySelector('#accordion .head .button').textContent = 'More';        
    }

}