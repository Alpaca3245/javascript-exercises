const removeFromArray = function(array, ...removeArrayIndex) {
    newArray = [];



// When array[i] includes something from removeArrayIndex set to false, otherwise push new variable to newArray. 
    for (let i = 0; i < array.length; i++) {
        if (!removeArrayIndex.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
