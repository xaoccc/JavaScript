function vacation(num, type, day) {
    var customers = {"Students": {"Friday": 8.45, "Saturday": 9.80, "Sunday": 10.46},
                    "Business": {"Friday": 10.90, "Saturday": 15.60, "Sunday": 16},
                    "Regular": {"Friday": 15, "Saturday": 20, "Sunday": 22.50}};

    var students_discount = 0.15;
    var business_discount = 10; // 10 people get free vacation if the total number if 100 or more
    var regular_discount = 0.05;

    for (var customer in customers) {
        if (customer === type) {
            for (var dayType in customers[customer]) {
                if (dayType === day) {
                    var price = customers[customer][dayType] * num;
                    if (type === "Students" && num >= 30) {
                        price = price - (price * students_discount);
                    } else if (type === "Business" && num >= 100) {
                        price = price - (customers[customer][dayType] * business_discount);
                    } else if (type === "Regular" && num >= 10 && num <= 20) {
                        price = price - (price * regular_discount);
                    }
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            }
        }
    }
}

vacation(110, "Business", "Sunday");
