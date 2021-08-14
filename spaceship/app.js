console.log('Welcome to my console game');
console.log('You are Dominic Toretto, Leader of the USS Family')
console.log('Aliens are threatening your family! Defeat the Aliens!')
//hero.attack(alien) to attack alien
//alien.attack(hero) to attack hero
// Objects

const hero = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    isAlive: true,
    attack(target) {
        let ranNum = Math.random();
        console.log(`Accuracy threshold is ${ranNum}`);
        if (ranNum < this.accuracy) {
            console.log(`It's a direct hit!! Well done Mr. Toretto!`);
            target.hull = target.hull - this.firepower;
            console.log(`alien has ${target.hull} hull points left.`);
            if (target.hull <= 0) {
                target.isAlive = false;
                console.log(`With the POWER OF FAMILY, you defeated the aliens!`);

            }
        } else {
            console.log(`Family wasn't on your side, you missed!`);
        }
    }
}
const alien = {
    hull: Math.round((Math.random() * (6 - 3)) + 3),
    firepower: Math.round((Math.random() * (4 - 2)) + 2),
    accuracy: (Math.random() * (.8 - .6)) + .6,
    isAlive: true,
    attack (target) {
        let ranNum = Math.random();
        console.log(`Accuracy threshold is ${ranNum}`);
        if (ranNum < this.accuracy) {
            console.log(`You've been hit!`);
            target.hull = target.hull - this.firepower;
            console.log(`USS Family has ${target.hull} hull points left.`);
            if (target.hull <= 0) {
                target.isAlive = false;
                console.log(`Your Family is destroyed! Screw you Toretto!`);
            
            }
        } else {
            console.log(`You dodged the attack!`);
        }
    }
}

const battle = (player, computer) => {
    while (player.isAlive && computer.isAlive) {
        player.attack(computer);
        if (computer.isAlive) {
            computer.attack(player);
        }
    }
}