const numbers1 = [1, 2, 3, 4, 5];

/** Remove Elements */
const last = numbers1.pop(); /** return 5 */
const first = numbers1.shift(); /** return 1 */
const model = numbers1.splice(1, 2); /** return new array */

console.log(numbers1); /** return 5 */

/** Remove all Elements */
/** 1 */
let numbers2 = [1, 2, 3, 4, 5];
let another = numbers2;

numbers2 = [];
console.log(numbers2); /** Empty array */
console.log(another);

/** 2 */ 
let numbers3 = [1, 2, 3, 4, 5];
numbers3.length = 0;
console.log("numbers3", numbers3);

console.clear();
/** 2 */ 
let numbers4 = [1, 2, 3, 4, 5];
numbers4.splice(0, numbers4.length)
console.log(numbers4);