function getSum(total, num) {
    return total + num;
}
function myFunction() {
    return numbers.reduce(getSum);
}

console.log(myFunction);