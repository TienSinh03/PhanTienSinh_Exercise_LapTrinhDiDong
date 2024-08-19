const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
};

//create a function 'calcBMI'
function calcBMI(mass, height) {
    return mass / height ** 2;
}

var markBMI = calcBMI(mark.mass, mark.height);
var johnBMI = calcBMI(john.mass, john.height);

//create a function 'compareBMI'
function compareBMI(markBMI, johnBMI) {
    if (markBMI > johnBMI) {
        return `Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`;
    } else {
        return `John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`;
    }
}

//test
console.log(compareBMI(markBMI, johnBMI));