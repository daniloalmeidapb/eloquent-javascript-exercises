function countChar(s1, s2) {
    var counter = 0;

    if (s2 == undefined) {
        s2 = "B";
    }

    for (var i = 0; i < s1.length; i++) {
        if (s1.charAt(i) == s2) {
            counter++;
        }
    }

    return counter;
}

console.log(countChar("BBC"));
console.log(countChar("kkkakrk", "k"));