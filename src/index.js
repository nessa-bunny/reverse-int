module.exports = function reverse (n) {
    let reverseNumber = Math.abs(n)
                        .toString()
                        .split('')
                        .reverse()
                        .join('');
    return Number(reverseNumber);
};
