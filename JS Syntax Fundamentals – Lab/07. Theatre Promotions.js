function theatre_if_else(day, age) {
    if (day == "Weekday") {
        if (0 <= age && age <= 18) {
            console.log("12$")
        } else if (18 < age && age <= 64) {
            console.log("18$")
        } else if (64 < age && age <= 122) {
            console.log("12$")
        } else {
            console.log("Error!")
        }
    }
    else if (day == "Weekend") {
        if (0 <= age && age <= 18) {
            console.log("15$")
        } else if (18 < age && age <= 64) {
            console.log("20$")
        } else if (64 < age && age <= 122) {
            console.log("15$")
        } else {
            console.log("Error!")
        }
    }
    else if (day == "Holiday") {
        if (0 <= age && age <= 18) {
            console.log("5$")
        } else if (18 < age && age <= 64) {
            console.log("12$")
        } else if (64 < age && age <= 122) {
            console.log("10$")
        } else {
            console.log("Error!")
        }
    }
    else {
        console.log("Error!")
    }
}

function theatre_elseif_switch(day, age) {
    if (age >= 0 && age <= 18) {
        switch (day) {
            case "Weekday":
                console.log("12$");
                break;
            case "Weekend":
                console.log("15$");
                break;
            case "Holiday":
                console.log("5$");
                break;
            default:
                console.log("Error!");
                break;
        }
    }
    else if (18 < age && age <= 64) {
        switch (day) {
            case "Weekday":
                console.log("18$");
                break;
            case "Weekend":
                console.log("20$");
                break;
            case "Holiday":
                console.log("12$");
                break;
            default:
                console.log("Error!");
                break;
        }
    }
    else if (64 < age && age <= 122) {
        switch (day) {
            case "Weekday":
                console.log("12$");
                break;
            case "Weekend":
                console.log("15$");
                break;
            case "Holiday":
                console.log("10$");
                break;
            default:
                console.log("Error!");
                break;
        }
    }
    else {
        console.log("Error!");
    }

}

