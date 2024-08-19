
let mark_mass1 = 78;
let mark_height1 = 1.69;
let john_mass1 = 92;
let john_height1 = 1.95;

let mark1_BMI = mark_mass1 / mark_height1**2;
let john1_BMI = john_mass1 / john_height1**2;

let markHigherBMI1 = mark1_BMI > john1_BMI;

console.log("Data 1:");
console.log("Mark's BMI:", mark1_BMI.toFixed(2));
console.log("John's BMI:", john1_BMI.toFixed(2));
if (markHigherBMI1) {
    console.log("Mark's BMI " + mark1_BMI.toFixed(2) +  " is higher than John's "+john1_BMI.toFixed(2)+ "!");
} else {
    console.log("Mark's BMI " + mark1_BMI.toFixed(2) +  " is shorter than John's "+john1_BMI.toFixed(2)+ "!");
}

let mark_mass2 = 95;
let mark_height2 = 1.88;
let john_mass2 = 85;
let john_height2 = 1.76;

let mark2_BMI = mark_mass2 / mark_height2**2;
let john2_BMI = john_mass2 / john_height2**2;

let markHigherBMI2 = mark2_BMI > john2_BMI;

console.log("Data 2:");
console.log("Mark's BMI:", mark2_BMI.toFixed(2));
console.log("John's BMI:", john2_BMI.toFixed(2));
if (markHigherBMI1) {
    console.log("Mark's BMI " + mark2_BMI.toFixed(2) +  " is higher than John's "+john2_BMI.toFixed(2)+ "!");
} else {
    console.log("Mark's BMI " + mark2_BMI.toFixed(2) +  " is shorter than John's "+john2_BMI.toFixed(2)+ "!");
}
