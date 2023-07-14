let radius = 1;
let x = 1;
let y = 1;
function draw(){console.log("Draw");}

// object literal

let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    isVisible: true,
    draw: function () {
        console.log("Draw");
    },
};

// circle.draw()

/* factory function */

function createCircle(radius, location){
    return {
        radius: radius,
        location: location,
        isVisible: true,
        draw: function () {
            console.log("Draw");
        },
    };
}

let circle1 = createCircle(1,2)
let circle2 = createCircle(4,6)
console.log(circle1);