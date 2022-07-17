const fibonacci = function(index) {
    if (index<0)return "OOPS";
    else
    {
        let num1 = 1;
        let num2 = 1;
        let temp = 0;
        for (let i=3;i<=index;i++) {
            temp = num2;
            num2 = num1 + num2;
            num1 = temp;
        }
        return num2;
    }
};

// Do not edit below this line
module.exports = fibonacci;



