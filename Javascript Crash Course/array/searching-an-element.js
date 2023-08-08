/* * for Primitive  */
const numbers1 = [1, 2, 3, 1, 5, 4];

console.log(numbers1.indexOf(1, 2)); /**find element position */
console.log(numbers1.lastIndexOf(1, 2)); /**find element position */
console.log(numbers1.includes(1, 2)); /**have element (boolean) */

// ->
const obj1 = { key: "value" };
const obj2 = { key: "value" };
const array1 = [obj1];
console.log(array1.includes(obj1)); /** true */
console.log(array1.includes(obj2)); /** true */
console.clear();


/* * for Primitive  */
const array2 = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
];

const result1 = array2.find((item) => {
    return item.name === "a";
});
const result2 = array2.findIndex((item) => {
    return item.name === "a";
});

console.log(result1, "position :",result2);
