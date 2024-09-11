const removeFromArray = function(array, removeArrayIndex) {
    newArray = [];


    for (let i = 0; i < array.length; i++) {
        if (i == removeArrayIndex - 1) {
            // Do nothing
        } else {
            newArray.push(array[i]);
        }
        console.log(i);
        console.log(array.length);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
