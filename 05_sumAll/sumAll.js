const sumAll = function (rangeStart, rangeEnd) {
    let sum = 0;

    if (rangeStart < 0 || rangeEnd < 0 || !Number.isInteger(rangeStart) || !Number.isInteger(rangeEnd)) {
        return 'ERROR'
    }

    if (rangeStart > rangeEnd) {
        [rangeStart, rangeEnd] = [rangeEnd, rangeStart];
    }
    for (let i = rangeStart; i <= rangeEnd; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
