/* Object is Dynamic */
const circle = {
    radius: 1
}

/* add property and method */
circle.color = "red"
circle.draw = function (){
    console.log("Draw");
}

/* delete property and method */
delete circle.radius

console.log(circle);