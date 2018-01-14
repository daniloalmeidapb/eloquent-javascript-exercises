function reverseArray(array) {
    var result = [];
    for (var index = array.length - 1; index >= 0; index--) {
         result.push(array[index]);
    }
    return result;
}

var array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));