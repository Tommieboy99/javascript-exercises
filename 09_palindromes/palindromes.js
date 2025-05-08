const palindromes = function (...words) {
    return words.every(word => {
        const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
        const wordReversed = cleanedWord.split('').reverse().join('');
        return wordReversed === cleanedWord;
    });
};

// Do not edit below this line
module.exports = palindromes;
