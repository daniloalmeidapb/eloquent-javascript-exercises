function getSum(total, num) {
    return total + num;
}
function myFunction(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

numbers = [1, 2, 3];
console.log(myFunction(numbers));