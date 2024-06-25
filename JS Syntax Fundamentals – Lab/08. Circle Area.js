function area(radius) {
    console.log(typeof(radius) === 'number' ? (Math.PI * radius * radius).toFixed(2) : `We can not calculate the circle area, because we receive a ${typeof(radius)}.`);
}