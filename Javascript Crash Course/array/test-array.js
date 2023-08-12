/* checked all Item */
const array1 = [1, 4, 5, 2];
const array2 = [1, 4, -5, 2];

const allPositive = array2.every((value) => {
    return value >= 0;
});
// console.log(allPositive);

/* checked one Item */
const array3 = [1, -4, -5, -2];

const atLestOnePositive = array3.some((value) => {
    return value >= 0;
});
console.log(atLestOnePositive);

