function endsWithX(string) {
    if (string.charAt(string.length - 1) == 'x'.toUpperCase()){
        return true;
    }
    else if (string.charAt(string.length - 1) == 'x'.toLowerCase()) {
        return true;
    }
    else{
        return false;
    }
}

module.exports = endsWithX;