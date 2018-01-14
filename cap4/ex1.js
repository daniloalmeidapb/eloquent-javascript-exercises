function range(start, end) {
    var result = [];
    for (var index = start; index <= end; index++) {
        result.push(index);
    }
    return result;
}

function sum(array) {
    var total = 0;
    for (var index = 1; index <= array.length; index++) {
        total += index;
    }
    return total;
}

var array = range(1, 10);

var s = "";
for (var index = 0; index < array.length; index++) {
    s += array[index] + " ";
}
console.log(s);
console.log(sum(array));

