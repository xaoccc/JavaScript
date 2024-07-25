function lockedProfile() {   

    document.querySelectorAll('.profile').forEach((profile) => {
        let button = profile.querySelector('button');
        button.addEventListener('click', function(e) {
            let lock = Array.from(profile.querySelectorAll('input[type="radio"]')).filter((input) => input.checked)[0];
            if (lock.value === 'unlock') {
                if (button.textContent === 'Hide it') {
                    button.previousElementSibling.style.display = 'none';
                    button.textContent = 'Show more';                
                } else {
                    button.previousElementSibling.style.display = 'block';
                    button.textContent = 'Hide it';
                }
            }

        })
    })
}