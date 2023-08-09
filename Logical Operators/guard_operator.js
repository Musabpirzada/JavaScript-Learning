function friendName(friend) {
    if (friend !== undefined) {
        return friend.name;
    } else {
        return undefined;
    }
}

module.exports = friendName;
