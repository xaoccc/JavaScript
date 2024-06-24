function person_age(age) {
    var ages_categories = { "baby": [0, 2], "child": [3, 13], "teenager": [14, 19], "adult": [20, 65], "elder": [66, 1000] };
    
    for (var age_category in ages_categories) {
        if (age >= ages_categories[age_category][0] && age <= ages_categories[age_category][1]) {
            console.log(age_category);
            return; // If we found the category, we stop the loop
        }
    }
    console.log("out of bounds"); // If the age is not in any category
}
