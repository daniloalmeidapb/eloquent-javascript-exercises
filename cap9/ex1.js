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

verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);

verify(/pr?op/, ["pop culture", "mad props"], ["plop"]);

verify(/ferr(et|y|ari)/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);

verify(/ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);

verify(/[.]/, ["bad punctuation ."], ["escape the dot"]);

verify(/\w{7}/, ["hottentottententen"], ["no", "hotten totten tenten"]);

verify(/\b[^\We]+\b/i, ["red platypus", "wobbling nest"], ["earth bed", "learning ape"]);