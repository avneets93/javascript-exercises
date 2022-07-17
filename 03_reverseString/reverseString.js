const reverseString = function(str) {
    let tempArr = str.split('');
    const len = tempArr.length;
    let resultArr = [];
    for (let i =0; i< len;i++){
        resultArr[len-i-1] = tempArr[i];
    }
    return resultArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
