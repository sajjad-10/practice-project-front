const circle = {
    radius: 1,
    draw() {
        console.log("Draw");
    },
};

/* 1 - use Loop */
const another = {};
for (let key in circle) {
    another[key] = circle[key];
}

// console.log(another);

const another2 = Object.assign({ color: "red" }, circle);
// console.log(another2);

const another3 = { location: 5, ...circle, color: "red" };
console.log(another3);
