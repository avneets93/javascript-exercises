const caesar = function(str,shift) {
    //for index of str
    //if index !== " " "," "!"
    //newCharIndex = str.charCodeAt(index) - shift 
    //if newCharIndex < 65 -> newCharIndex = 90 - (65-newCharIndex)
    //str += chrAt(newCharIndex);
    shift = shift%26;
    let resultArr = [];
    for(let i=0;i<str.length;i++){
        if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            let newCharIndex = str.charCodeAt(i) + shift; 
            if (newCharIndex>90){
                newCharIndex = 64 + (newCharIndex - 90);
            }
            if (newCharIndex<65){
                newCharIndex = 91 - (65 - newCharIndex);
            }
            resultArr.push(String.fromCharCode(newCharIndex));
        }
        else if (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
            let newCharIndex = str.charCodeAt(i) + shift; 
            if (newCharIndex>122){
                newCharIndex = 96 + (newCharIndex - 122);
            }
            if (newCharIndex<97){
                newCharIndex = 123 - (97 - newCharIndex);
            }
            resultArr.push(String.fromCharCode(newCharIndex));
        }
        else {
            resultArr.push(str.charAt(i));
        }
    }
    return resultArr.join('');
}

// Do not edit below this line
module.exports = caesar;
