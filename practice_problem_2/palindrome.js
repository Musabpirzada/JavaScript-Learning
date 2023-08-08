function isPalindrome(string) {
    const sanitizedString = string.toLowerCase().replace(/[^a-z]/g, "");
    const reversedString = sanitizedString.split("").reverse().join("");

    return sanitizedString === reversedString;
}

module.exports = isPalindrome;
