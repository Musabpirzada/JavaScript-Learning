const Hero = require('./Hero');

class Warrior extends Hero {
    constructor(initialHealth) {
        super(initialHealth); // Pass the initialHealth to the parent constructor
        this.rage = 0;
    }

    takeDamage(damage) {
        this.rage += 1; // Increment rage by 1
        super.takeDamage(damage); // Call the takeDamage method from the parent class
    }
}

module.exports = Warrior;




class Hero {
    constructor(initialHealth) {
        this.health = initialHealth;
    }

    takeDamage(damage) {
        this.health -= damage;
    }
}

module.exports = Hero;
