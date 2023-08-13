const array1 = [1, -1, 2, 3];

const filtered = array1.filter((value) => {
    return value >= 0;
});
// console.log(filtered);

/* more example */
const array2 = [
    { name: "Sajjad", age: 18 },
    { name: "Sajjad", age: 12 },
    { name: "Sajjad", age: 16 },
    { name: "Sajjad", age: 20 },
    { name: "Sajjad", age: 24 },
];

const result = array2.filter((value)=>{
    return value.age >=18
})
console.log(result);