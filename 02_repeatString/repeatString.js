const repeatString = function(word, times) {
    let repeatedString = "";
    for (let i = 0; i < times; i++) {
        repeatedString = repeatedString + word;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
