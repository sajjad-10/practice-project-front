/* 01 - global Scope */
/* Global Scope */
const name = "Sajjad";
function print() {
    console.log(name);
}
// print();

/* 02 - Local Scope -- all same for Block Scope */
function getUser() {
    /* Local Scope */
    const user = "Sajjad (getUser)";
}
// console.log(user); // reference error

function func1() {
    /* Local 1 */
    const name = "Sajjad (func1)";

    function func2() {
        /* Local 2 */
        const lastname = "Fallahi";

        console.log(`${name} ${lastname}`);
    }
    // console.log(lastname);  // reference error
    func2();
}
// func1();
