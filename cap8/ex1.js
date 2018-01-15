function MultiplicatorUnitFailure() {
}

function primitiveMiltiply(a, b) {
    if (Math.random() < 0.5) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure();
    }
}

function reliableMultiply(a, b) {
    for( ; ; ){
        try {
            return primitiveMiltiply(a, b);
        } catch (e) {
            console.log("Catch multiplicator unit failure: ", e);
        }
    }
}

console.log(reliableMultiply(8, 8));