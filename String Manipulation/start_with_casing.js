function startsWithX(string) {
    if(string.charAt(0) == 'x'.toUpperCase()){
        return true;
    }
    else if (string.charAt(0) == 'x'.toLowerCase()) {
        return true;
    }
    else{
        return false;
    }
}

module.exports = startsWithX;