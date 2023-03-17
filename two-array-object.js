/**
 * Convert the keys array into an object using the reduce method.
 *  In the reduce callback function, set the current value as a key in
 *  the accumulator object, with the value set to whatever element is
 *  at the current index in the values array.
 */
function twoArrayObject(keys, values) {
    return keys.reduce((obj, cur, idx) => {
        obj[cur] = idx < values.length ? values[idx] : null;
        return obj;
    }, {});
}

module.exports = twoArrayObject;