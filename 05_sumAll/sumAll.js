const sumAll = function(first,last) {
    if (typeof first !== "number" || typeof last !== "number" || first <0 
            || last <0){
                return "ERROR";
            } 
    let small, large;
    if (first<last) {
        small = first;
        large = last;
    }
    else {
        small = last;
        large = first;
    }
    let sum = 0;
    for (let i=small;i<=large;i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
