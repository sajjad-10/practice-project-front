const numbers = [1, 9, 7, 12, -10];

/* with For */
let sum1 = 0;
for (const n of numbers) {
    sum1 += n;
}
// console.log(sum1);

/* Array Methods */
let sum2 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum2);
/*
    a=0 ,c=1 => a=1
    a=1 ,c=9 => a=10
*/
