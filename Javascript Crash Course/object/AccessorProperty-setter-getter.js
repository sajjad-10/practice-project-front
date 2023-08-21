/* in bad way - white copy to mene code */
const person1 = { name: "Sajjad", lname: "Fallahi" };
const full_name1 = person1.name + " " + person1.lname; // get
person1.name = "Sajjad2"; // set new name
person1.lname = "Fallahi2"; // set new lname
const new_full_name1 = person1.name + " " + person1.lname; // get
// console.log(full_name1);
// console.log(new_full_name1);

/*  */
const person2 = {
    name: "Sajjad",
    lname: "Fallahi",
    get fullName() {
        return `${person2.name} ${person2.lname}`;
    },
    set fullName(value) {
        [this.name, this.lname] = value.split(" ");
    },
};
console.log("get property:", person2.fullName);
person2.fullName = "Sajjad02 Fallahi02";
console.log("get property after set:", person2.fullName);
