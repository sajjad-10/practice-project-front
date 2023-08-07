const numbers = [4, 5];

console.log("before Change:", numbers);

numbers.push(6, 7);
numbers.unshift(2, 3);
numbers.splice(3, 0, "S");

console.log("after Change:", numbers);
