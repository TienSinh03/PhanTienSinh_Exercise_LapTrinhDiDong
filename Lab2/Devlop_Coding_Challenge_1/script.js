
//create function printForecast
var printForecast = function(arr) {
    var string =  '';
    for (var i = 0; i < arr.length; i++) {
        string += `...${arr[i]}oC in ${i + 1} days`;
    }
    return string;
}

//Data 1
var arr1 = [17, 21, 23];
console.log('Data 1');
console.log(printForecast(arr1)+ '...');

//Data 2
var arr2 = [12, 5, -5, 0, 4];
console.log('Data 2');
console.log(printForecast(arr2)+ '...');
