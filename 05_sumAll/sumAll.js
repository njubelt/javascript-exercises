const sumAll = function(int1, int2) {
    let sum = 0;
    let int3 = 0;
    if (int1 > int2) {
        int3 = int2; //set intermediate variable
        int2 = int1; //swap int2 and int1
        int1 = int3; //set int1 to intermediate variable
    }
    if ((int1 < 0) || (int2 < 0) || (typeof int1 != "number") || (typeof int2 != "number")) {
        return "ERROR";
    }
    for (let i = int1; i <= int2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
