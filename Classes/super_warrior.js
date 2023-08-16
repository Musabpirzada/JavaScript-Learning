const Hero = require('./Hero');

class Warrior extends Hero {
    constructor() {
        super(); // Call the constructor of the parent class
        this.rage = 0;
    }
}

module.exports = Warrior;




class Hero {
    constructor() {
        this.health = 50;
    }

    takeDamage(damage) {
        this.health -= damage;
    }
}

module.exports = Hero;
