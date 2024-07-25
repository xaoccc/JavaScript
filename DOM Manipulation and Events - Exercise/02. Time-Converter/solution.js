function attachEventsListeners() {
    let allBtns = document.querySelectorAll('input[type="button"]');
    let allFields = document.querySelectorAll('input[type="text"]');
    function calculateTimes(timeInput, timeId) {
        timeInput = Number(timeInput);
        switch (timeId) {
            case 'days':
                return {'days': timeInput, 'hours': timeInput * 24, 'minutes': timeInput * 24 * 60, 'seconds': timeInput * 24 * 3600 };
            case 'hours':
                return {'days': timeInput / 24, 'hours': timeInput, 'minutes': timeInput * 60, 'seconds': timeInput * 3600 };
            case 'minutes':
                return {'days': timeInput / 24 / 60, 'hours': timeInput / 60, 'minutes': timeInput, 'seconds': timeInput * 60 };
            case 'seconds':
                return {'days': timeInput / 24 / 3600, 'hours': timeInput / 3600, 'minutes': timeInput / 60, 'seconds': timeInput };
        }
    }

    allBtns.forEach((button) => {
        button.addEventListener('click', function(e) {            
            let input = e.target.parentElement.querySelector('input[type="text"]');            
            if (input.value !== '') {
                let times = calculateTimes(input.value, input.id);                
                allFields.forEach((field) => {
                    if (field.id !== input.id) {
                        field.value = times[field.id];
                    }                    
                })
            }
        })
    })
}