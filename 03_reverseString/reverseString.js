const reverseString = function(string) {
    let revString = "";
    for (let i=string.length; i>0; i--){
        revString += string.slice(i-1, i);
        
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
