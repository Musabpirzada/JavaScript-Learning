function canBreathe(isConnected, hasOxygen, aboveWater) {
    if (aboveWater) {
        return true;
    } else {
        return isConnected && hasOxygen;
    }
}

module.exports = canBreathe;
