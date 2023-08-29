function walk(node) {
    return node;
}

const n = walk({ id: 1, next: undefined });
console.log(n); // { id: 1, next: undefined }

module.exports = walk;
