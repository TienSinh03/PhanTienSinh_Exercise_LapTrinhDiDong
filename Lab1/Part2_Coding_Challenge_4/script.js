//create function  'calcTip'
function calcTip(data) {
    return data >= 50 && data <= 300 ? data * 0.15 : data * 0.2;
}

var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips = [];
var totals = [];

for (var i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
    console.log(`The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value was ${totals[i]}`);
}

// Bonus;
console.log("Bonus");

//create function averageTip
function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(`The average totals is ${calcAverage(totals)}`);

