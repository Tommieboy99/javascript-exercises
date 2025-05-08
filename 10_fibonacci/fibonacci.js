const fibonacci = function(number) {
    number = parseInt(number);

    if (isNaN(number) || number < 0) return "OOPS";
    if (number === 0) return 0;
    if (number === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= number; i++) {
        const next = a + b;
        a = b;
        b = next;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
