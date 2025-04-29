const removeFromArray = function(arrayInput, ...itemsToRemove) {
    return arrayInput.filter(arrayItem => !itemsToRemove.includes(arrayItem));
};


// Do not edit below this line
module.exports = removeFromArray;