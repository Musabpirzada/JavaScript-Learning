const personJSON = `
    {
        "name": "Harry Potter",
        "age": 18,
        "isReal": false
    }
`;

const person = JSON.parse(personJSON);

console.log(person.name);    // Output: "Harry Potter"
console.log(person.age);     // Output: 18
console.log(person.isReal);  // Output: false

module.exports = personJSON;
