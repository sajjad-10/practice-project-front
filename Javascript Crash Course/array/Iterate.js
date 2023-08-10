/* loop on array - for of */
const array = [1, 2, 3];

for (const iterator of array) {
    // console.log(iterator);
}

/* loop on array - forEach */
array.forEach((item, index) => {
    console.log(item, index);
});
