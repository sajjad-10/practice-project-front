/* old way */
function interest1(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;
    return ((principal * rate) / 100) * years;
}
// console.log(interest1(100000));

/* in Es 6 */
function interest2(principal, rate = 3.5, years = 5) {
    return ((principal * rate) / 100) * years;
}
console.log(interest2(100000));
