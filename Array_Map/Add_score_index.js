function addScore(players) {
    return players.map((player, index) => ({
        id: player.id,
        score: index < 3 ? player.score + 10 : player.score
    }));
}

module.exports = addScore;
