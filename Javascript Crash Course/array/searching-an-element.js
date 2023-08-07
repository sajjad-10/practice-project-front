/* * for Primitive  */
const numbers1 = [1, 2, 3, 1, 5, 4];

console.log(numbers1.indexOf(1, 2)); /**find element position */
console.log(numbers1.lastIndexOf(1, 2)); /**find element position */
console.log(numbers1.includes(1, 2)); /**have element (boolean) */
console.clear();

// ->
const obj1 = { key: "value" };
const obj2 = { key: "value" };
const array1 = [obj1];
console.log(array1.includes(obj1)); /** true */
console.log(array1.includes(obj2)); /** true */
