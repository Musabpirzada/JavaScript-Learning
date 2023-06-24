const fakeName = require('./fakeName');

const message = `
    Hello, John! You left a package at the office today.
    You can pick up tomorrow at 10am, John. 
    If not I will drop it off this weekend.
    Goodbye John!
`;

rmessage = message.replace(/John/g, fakeName);

module.exports = rmessage;

//In this code, the replace() method is called on the message string, and the regular expression /John/g is used as the search pattern. The g flag ensures that all occurrences of "John" are replaced, not just the first one. The second argument to replace() is the value stored in the fakeName variable, which will be used as the replacement for each occurrence of "John".