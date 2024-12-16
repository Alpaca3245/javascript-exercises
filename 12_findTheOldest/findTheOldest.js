// Using year only, get the age does not include months or day
// Would of preferred to not make a new array, but I already looked at the solution and decided to use something else
function getAge(arr) { 
    if (Object.keys(arr).includes('yearOfDeath')) { // If key "yearOfDeath exists in arr"
        return arr.yearOfDeath - arr.yearOfBirth; // calculates the age by yearOfBirth - yearOfDeath
    } else { 
        return (new Date().getFullYear()) - arr.yearOfBirth; // Create the current year if yearOfDeath does not exist (meaning still alive)
    }
}


const findTheOldest = function(arr) {
    return oldest = arr.reduce((oldestPerson, currentPerson) => {
        oldestPersonAge = getAge(oldestPerson);
        currentPersonAge = getAge(currentPerson);

        return oldestPersonAge > currentPersonAge ? oldestPerson : currentPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
