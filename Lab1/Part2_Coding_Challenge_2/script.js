//create function  'calcTip'
function calcTip(data) {
    return data >= 50 && data <= 300 ? data * 0.15 : data * 0.2;
}

var bills = [125, 555, 44];
var tips = [];
var total = [];

for (var i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i]);
    console.log(`The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value was ${total[i]}`);
}

