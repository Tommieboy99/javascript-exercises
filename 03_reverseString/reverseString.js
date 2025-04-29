const reverseString = function(word) {
    let wordReversed = word.split('');
    wordReversed.reverse();
    let reversed = wordReversed.join('');

    return reversed
};

// Do not edit below this line
module.exports = reverseString;
