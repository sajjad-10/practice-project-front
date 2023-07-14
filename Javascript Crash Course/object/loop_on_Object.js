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

/* get key */
for(let key in circle){
    console.log(key);
}

/* get value */
for(let key in circle){
    console.log(circle[key]);
}

