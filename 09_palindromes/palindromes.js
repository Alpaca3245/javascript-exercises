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

function reverseString(string) {
    let convertString = string;

    convertString = getStringArray(convertString);
    convertString = reverseArray(convertString);
    convertString = combineArrayIntoString(convertString);
    return convertString;
};

function removePunctuationSpacesAndCapitals (str) {
    let newStr = "";
    newStr = str.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); // Removes punctuation and spaces using regex
    newStr = newStr.toLowerCase(); // Removes capitals
    return newStr;
}

const palindromes = function (string) {
    
    let newStr = removePunctuationSpacesAndCapitals(string);
    const reversedString = reverseString(newStr);
    console.log("reversedString: " + reversedString);
    console.log("string: " + string);
    console.log((newStr == reversedString ? true : false));

    return (newStr == reversedString ? true : false);
};

const asfsad = palindromes("racecar!");
const asfsada = removePunctuationSpacesAndCapitals ("Animal loots foliated detail of stool lamina."); 


// Do not edit below this line
module.exports = palindromes;
