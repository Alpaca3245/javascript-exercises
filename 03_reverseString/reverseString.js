//   Pusedocode:
// - put each letter indiviually of a string into a array
// - Reverse the array by putting it in a variable
// - Copy variable to reverseString


function getStringArray (string) {
    let stringArray = [];
    
    for (let i = 0; i < string.length; i++) {
        stringArray[i] = string.charAt(i);
    }
    return stringArray;
}

function reverseArray(array) {
    let reversedArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray = reversedArray + array[i];
    }
    return reversedArray;
}

function combineArrayIntoString(array) {
    let combinedArray = "";

    for (let i = 0; i < array.length; i++) {
        combinedArray =  combinedArray + array[i];
    }
    return combinedArray;
}

const reverseString = function (string) {
    let convertString = string;

    convertString = getStringArray(convertString);
    convertString = reverseArray(convertString);
    convertString = combineArrayIntoString(convertString);
    return convertString;
};

// Do not edit below this line
module.exports = reverseString;

