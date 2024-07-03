function inventory(input) {
    let heroesData = [];
    for (line of input) {
        let [name, level, items] = line.split(' / ');
        heroesData.push({'name': name, 'level': Number(level), 'items': items});
    }

    let sortedHeroesData = heroesData.sort((a, b) => a.level - b.level);

    for (let hero of sortedHeroesData) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    }

}

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    
    );