function verify(regexp, yes, no) {
    
    if (regexp.source == "...") {
        return;
    }

    yes.forEach(s => {
        if (!regexp.test(s)) {
            console.log("Failure to match '" + s + "'");
        }
    });

    no.forEach(s => {
        if (regexp.test(s)) {
            console.log("Unexpected match for '" + s + "'");
        }
    });
}

verify(/.../, 
    ["my car", "bad cats"], 
    ["camper", "high art"]);

verify(/.../,
        ["pop culture", "mad props"],
        ["plop"]);

verify(/.../,
        ["ferret", "ferry", "ferrari"],
        ["ferrum", "transfer A"]);

verify(/.../,
        ["how delicious", "spacious room"],
        ["ruinous", "consciousness"]);

verify(/.../,
        ["bad punctuation ."],
        ["escape the dot"]);

verify(/.../,
        ["hottentottententen"],
        ["no", "hotten totten tenten"]);

verify(/.../,
        ["red platypus", "wobbling nest"],
        ["earth bed", "learning ape"]);