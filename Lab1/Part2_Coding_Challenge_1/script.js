//createe function 'calcAverage'
function calcAverage(data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum / data.length;
}

//create function 'checkWinner'
function checkWinner(avgDolphins, avgKoalas) { 
    if(avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
        // check is at least double
        if(avgDolphins >= 2 * avgKoalas) {
            console.log('Average Dolphins is at least double Average Koalas');
        }
    } else if(avgKoalas > avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
        // check is at least double
        if(avgKoalas >= 2 * avgDolphins) {
            console.log('Average DolphinsKoalas is at least double Average Dolphins');
        }
    } else {
        console.log('No team wins');
    }
}

// Data 1
var dolphoins_1 = [44, 23, 71];
var koalas_1 = [65, 54, 49];

var avgDolphins_1 = calcAverage(dolphoins_1);
var avgKoalas_1 = calcAverage(koalas_1);
console.log("Data 1: ")
checkWinner(avgDolphins_1, avgKoalas_1);

//Data 2
var dolphoins_2 = [85, 54, 41];
var koalas_2 = [23, 34, 27];

var avgDolphins_2 = calcAverage(dolphoins_2);
var avgKoalas_2 = calcAverage(koalas_2);
console.log("Data 2: ")
checkWinner(avgDolphins_2, avgKoalas_2);