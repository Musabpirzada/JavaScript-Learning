const Hero = require('./Hero');

class Warrior extends Hero {

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
