const findTheOldest = function(people) {
    let age = 0;
    let oldest = 0;
    let oldestPerson = {};
    const year = new Date();
    for(const person of people){
        if (person["yearOfDeath"]) age = person["yearOfDeath"] - person["yearOfBirth"];
        else age = year.getFullYear() - person["yearOfBirth"];
        if (age > oldest) {
            oldest = age;
            oldestPerson = person;
        }    
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
