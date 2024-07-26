function attachEventsListeners() {
    const input = document.querySelector('#inputDistance');
    let resultField = document.querySelector('#outputDistance');
    const selectFrom = document.querySelectorAll('#inputUnits option');
    const selectTo = document.querySelectorAll('#outputUnits option');
    const button = document.querySelector('#convert');
    
    let [from, to] = ['', ''];
    let valueInMeters = 0;
    const data = { km: 1000, m: 1, cm: 0.01, mm: 0.001, mi: 1609.34, yrd: 0.9144, ft: 0.3048, in: 0.0254 }

    button.addEventListener('click', function(e) {
        selectFrom.forEach((option) => {
            (option.selected) ? from = option.value : null;
        })
        valueInMeters = data[from] * Number(input.value);

        selectTo.forEach((option) => {
            (option.selected) ? to = option.value : null;
        })
        resultField.value = valueInMeters / data[to]
    })

}