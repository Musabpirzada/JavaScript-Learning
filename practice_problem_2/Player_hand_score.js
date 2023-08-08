function playerHandScore(hand) {
    const cardValues = {
        "K": 4,
        "Q": 3,
        "J": 2
    };

    let totalScore = 0;

    for (let i = 0; i < hand.length; i++) {
        const card = hand[i].toUpperCase(); // Convert to uppercase for case-insensitive matching

        if (card in cardValues) {
            totalScore += cardValues[card];
        }
    }

    return totalScore;
}

module.exports = playerHandScore;
