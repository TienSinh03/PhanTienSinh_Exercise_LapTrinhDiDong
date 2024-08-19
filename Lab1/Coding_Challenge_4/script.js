//Data 1
var bill_value = [275,40,430];

for (var i = 0; i < bill_value.length; i++) {
    // tính tip
    var tip = bill_value[i] >= 50  && bill_value[i] <= 300 ? bill_value[i]*0.15 : bill_value[i]*0.2;
    console.log(`The bill was ${bill_value[i]}, the tip was ${tip}, and the total value ${bill_value[i]+tip}`);
}



