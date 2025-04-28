const getTheTitles = function (books) {
    return books.reduce((accumulator, currentValue) => {
        accumulator.push(currentValue.title)
        return accumulator;
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
