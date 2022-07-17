const removeFromArray = function(inputArray,...removeList) {
    for (let i=0; i<inputArray.length; i++){
        for (let j=0; j<removeList.length;j++){
            if (inputArray[i] === removeList[j]){
                inputArray.splice(i,1);
                i--;
            }
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
