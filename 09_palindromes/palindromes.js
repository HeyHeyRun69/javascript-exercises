const palindromes = function (words) {
    const reversedWords = words.replace(/[^a-z0-9]/gmi, "").replace(/\s+/g, "").split('').reverse().join('');
    return reversedWords.toLowerCase() === words.replace(/[^a-z0-9]/gmi, "").replace(/\s+/g, "").toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
