function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Draw");
    };
}

/* create function white  Constructor  */

const circle = new Function(
    "radius",
    `    
        this.radius = radius;
        this.draw = function () {
            console.log("Draw");
        };
    `
);

const circle1 = new circle(5)
console.log(circle1);