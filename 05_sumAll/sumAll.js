const sumAll = function(num1, num2) {
    let sum = 0;
    let min = num1;
    let max = num2;

    // isInteger seems to catches the last 3 problems in the npm test
    if (Number.isInteger(num1) && num1 > 0 && 
        Number.isInteger(num2) && num2 > 0) {
        if (num1 > num2) {
            min = num2;
            max = num1;
        }

        for (let i = min; i <= max; i++) {
            sum = sum + i;
        }
        return sum;
    } else {
        return "ERROR";
    }


};

sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
