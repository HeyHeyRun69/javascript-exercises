const findTheOldest = function (people) {
    return people.reduce((accumulator, currentPerson) => {
        if(!accumulator.yearOfDeath) {
            accumulator.yearOfDeath = new Date().getFullYear();
        }
        if(!currentPerson.yearOfDeath) {
            currentPerson.yearOfDeath = new Date().getFullYear();
        }
        
        let oldestAge = accumulator.yearOfDeath - accumulator.yearOfBirth;
        let currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

        return oldestAge > currentAge ? accumulator : currentPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
