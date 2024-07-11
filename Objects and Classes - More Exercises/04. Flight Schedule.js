function flightSchedule(input) {
    let allFlights = input[0].map((flight) => [flight.split(' ')[0], flight.split(' ').slice(1).join(' ')]);
    let statusUpdate = Object.fromEntries(input[1].map((flight) => flight.split(' ')));
    let statusCheck = input[2][0];
    let readyFlights = allFlights.filter((flight) => !Object.keys(statusUpdate).find((item) => item === flight[0]));
    let cancelledFlights = allFlights.filter((flight) => Object.keys(statusUpdate).find((item) => item === flight[0]));

    function printFlightsReport(flightType) {
        for (let flight of flightType) {
            let result = { Destination: flight[1], Status: statusCheck }
            console.log(result);
        }
    }

    (statusCheck === 'Cancelled') ? printFlightsReport(cancelledFlights) : printFlightsReport(readyFlights);
}
