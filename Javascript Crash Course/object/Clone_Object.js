const circle = {
    radius: 1,
    draw() {
        console.log("Draw");
    },
};

/* 1 - use Loop */
const another = {}
for(let key in circle){
    another[key] = circle[key]
}

console.log(another);