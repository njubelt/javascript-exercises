const removeFromArray = function(arr, remove) {
    for(let i=0; i < arr.length; i++) {
        if (arr[i] === remove) {
            arr.splice(i,remove);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
