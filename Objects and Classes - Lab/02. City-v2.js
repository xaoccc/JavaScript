function city(obj) {
    obj.detailedInfo = () => console.log(`name -> ${obj.name}\narea -> ${obj.area}\npopulation -> ${obj.population}\ncountry -> ${obj.country}\npostCode -> ${obj.postCode}`);
    obj.detailedInfo();
}

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
);