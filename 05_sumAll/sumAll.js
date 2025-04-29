const sumAll = function(numberOne, numberTwo) {
    if (numberOne <= 0 || numberTwo <= 0) {
        return "ERROR";
    }
    if (!Number.isInteger(numberOne) || !Number.isInteger(numberTwo)) {
        return "ERROR";
    }

    let totalSum = 0;

    let start = Math.min(numberOne, numberTwo);
    let end = Math.max(numberOne, numberTwo)

    for (i = start; i <= end; i++ ) {
        totalSum += i;
    }

    return totalSum
};

// Do not edit below this line
module.exports = sumAll;
