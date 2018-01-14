function isEven(number) {
    if (number < 0) {
        return false;
    } else {
        return isEven(number - 2) == 0;
    }
}

console.log(isEven(0));