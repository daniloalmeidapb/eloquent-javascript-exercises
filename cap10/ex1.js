let month = function() {
    var names = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October",
    "November", "December"];

    return {
        name: function(number) {
            return names[number];
        },
        number: function(name) {
            return names.indexOf(name);
        }
    }
}();

console.log(month.name(2));
console.log(month.number("January"));