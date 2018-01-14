var size = 10;
var row = "#";

for (var i = 0; i < size; i++) {

    row = (i % 2 == 0) ? '' : ' ';

    for (var j = 0; j < size; j++) {
        row += (j % 2 == 0) ? '#' : ' ';
    }
    
    console.log(row);
}