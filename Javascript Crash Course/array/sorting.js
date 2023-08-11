/* Sorting an Array - string & number*/
numbers1 = [3, 5, 1, 2, 4];
numbers1.sort(); /* change base array */
// console.log("Sort", numbers1);

/* Reversing */
const reverse = numbers1.reverse();
// console.log("Reverse", reverse);

/* In objects Array */
array1 = [
    { id: 1, name: "html" },
    { id: 2, name: "css" },
    { id: 3, name: "js" },
];

array1.sort((a, b) => {
    let nameA = a.name.toLowerCase();
    let nameB = a.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(array1);
