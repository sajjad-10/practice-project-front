/* Object Arguments */
function sum(a, b) {
    let total = 0;
    for (let value of arguments) total += value;
    return total;
}

// console.log(sum(1, 5, 9, 12, 18));

/* ...Rest Parameters */
function sum1(...args) {
    return args.reduce((a, c) => a + c, 0);
}

// console.log(sum1(1, 5, 9, 12, 18));

/* example2 ...Rest Parameters */
function discount(discount, ...args) {
    let total = args.reduce((a, c) => a + c, 0);
    return total * (1 - discount);
}

console.log(sum1(0.5, 1, 5, 9, 12, 18));
