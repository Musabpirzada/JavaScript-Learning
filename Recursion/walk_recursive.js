function walk(node) {
    if (node.next === undefined) {
        return node;
    } else {
        return walk(node.next);
    }
}

const n = walk({ id: 1, next: { id: 2, next: { id: 3, next: { id: 4, next: undefined } } } });
console.log(n); // { id: 4, next: undefined }

module.exports = walk;
