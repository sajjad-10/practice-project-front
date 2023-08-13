/* Example 1 */
const array1 = [1, 3, 9, 7];

const result1 = array1.map((value) => {
    return value * 2;
});
// console.log(result1);

/* Example 2 */
const array2 = ["html", "css", "js"];
const items = array2.map((value) => {
    return `<li>${value}</li>`;
});
const html = `<ul>${items.join("")}</ul>`;
// console.log(html);

/* Example 3 */
const array3 = ["html", "css", "js"];
const products = array2.map((product) => {
    const obj = { value: product };
    return obj;
});
// console.log(products);

/* Example 4 */
const array4 = [1, 3, -9, 7];
const items2 = array4.filter((v) => v >= 0).map((n) => ({ value: n }));
console.log(items2);
