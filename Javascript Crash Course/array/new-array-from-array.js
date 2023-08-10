/* concatenates (joins) */
const first1 = [1, 2, 3];
const second1 = [4, 5, 6];

const combined = first1.concat(second1);

/* New Array from old Array */
const splice = combined.splice(1, 4);

/* Tip for reference types */
const first2 = [{ id: 1 }];
const second2 = [4, 5, 6];

first2[0].id =  99
const combined2 = first2.concat(second2);
console.log(first2); /* *return [ { id: 99 } ] */
console.log(combined2);  /* *return [ { id: 99 }, 4, 5, 6 ] */
