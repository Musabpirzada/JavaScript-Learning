function deepRetrieval(obj) {
    if (typeof obj === 'object' && obj.hasOwnProperty('prop')) {
        return deepRetrieval(obj.prop);
    } else {
        return obj;
    }
}

module.exports = deepRetrieval;
