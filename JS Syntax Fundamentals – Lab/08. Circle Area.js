function area(radius) {
    if (typeof(radius) === 'number') {
        let area = Math.PI * radius * radius;
        console.log(area.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`);
    }
}