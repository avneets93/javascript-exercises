const palindromes = function (str) {
    str = str.replaceAll(' ','');
    str = str.replaceAll(',','');
    str = str.replaceAll('.','');
    str = str.replaceAll('!','');

    let strArr = str.split('');
    let reverseArr = [];
    for(let i=0;i<strArr.length;i++){
        reverseArr[strArr.length-i-1] = strArr[i];
    }
    let reverseStr = reverseArr.join('');
    if (str.toUpperCase() === reverseStr.toUpperCase()) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
