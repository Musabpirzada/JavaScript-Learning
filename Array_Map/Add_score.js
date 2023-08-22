function addScore(players) {
    return players.map((player) => ({
        id: player.id,
        score: player.score + 10
    }));
}

module.exports = addScore;
