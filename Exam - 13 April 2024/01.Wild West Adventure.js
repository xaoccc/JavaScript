function wildWest(input) {
    let heroes = [];
    const [maxBullets, maxHp] = [6, 100];

    input.slice(1, Number(input[0]) + 1).forEach((line) => {
        let [name, hp, bullets] = line.split(' ').map((entry) => (isNaN(Number(entry))) ? entry : Number(entry));
        heroes.push({name, hp, bullets});
    })

    function findHero(name) {
        return heroes.filter((hero) => hero.name === name);
    }

    function fireShot(hero, target) {
        if (hero) {
            if (hero[0].bullets) {
                hero[0].bullets -= 1;
                console.log(`${hero[0].name} has successfully hit ${target} and now has ${hero[0].bullets} bullets!`);
            } else {
                console.log(`${hero[0].name} doesn't have enough bullets to shoot at ${target}!`)
            }
        }
    }

    function takeHit(hero, damage, attacker) {
        if (hero) {
            if (hero[0].hp - Number(damage) > 0) {
                hero[0].hp -= Number(damage);
                console.log(`${hero[0].name} took a hit for ${damage} HP from ${attacker} and now has ${hero[0].hp} HP!`);
            } else {
                console.log(`${hero[0].name} was gunned down by ${attacker}!`);
                heroes = heroes.filter((character) => {
                    return character !== hero[0]} );
            }
        }
    }

    function reload(hero) {
        if (hero) {
            if (hero[0].bullets < maxBullets) {
                console.log(`${hero[0].name} reloaded ${maxBullets - hero[0].bullets} bullets!`);
                hero[0].bullets = maxBullets;                
            } else {
                console.log(`${hero[0].name}'s pistol is fully loaded!`);
            }
        }
    }

    function patchUp(hero, amount) {
        if (hero) {
            if (hero[0].hp < maxHp) {
                console.log(`${hero[0].name} patched up and recovered ${(hero[0].hp + Number(amount) > maxHp) ? maxHp - hero[0].hp : amount} HP!`);
                (hero[0].hp + Number(amount) > maxHp) ? hero[0].hp = maxHp : hero[0].hp += Number(amount);
            } else {
                console.log(`${hero[0].name} is in full health!`);
            }
        }
    }
    
    input.slice(Number(input[0]) + 1).forEach((action) => {
        let [command, heroName, ...other] = action.split(' - ');
        if (command === 'Ride Off Into Sunset') {
            heroes.forEach((hero) => {
                console.log(`${hero.name}\n HP: ${hero.hp}\n Bullets: ${hero.bullets}`);
            })
            process.exit();
        }
        switch (command) {
            case 'FireShot':
                fireShot(findHero(heroName), other[0]);
                break;
            case 'TakeHit':
                takeHit(findHero(heroName), other[0], other[1]);
                break;
            case 'Reload':
                reload(findHero(heroName));
                break;
            case 'PatchUp':
                patchUp(findHero(heroName), other[0]);
                break;
        }
    })


}

wildWest(["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
     "TakeHit - Walt - 30 - Bandit",
     "PatchUp - Walt - 20" ,
     "Reload - Jesse",
     "Ride Off Into Sunset"])
    
 ;