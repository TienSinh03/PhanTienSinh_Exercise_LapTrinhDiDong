// Data 1
var dolphins = [96, 108, 89];
var koalas = [88, 91, 110];

var average_dol = (dolphins[0]+dolphins[1]+dolphins[2])/3;
var average_koa = (koalas[0]+koalas[1]+koalas[2])/3;


//Compare
if(average_dol == average_koa){
    console.log("They have the same average score");
} else if (average_dol > average_dol) {
    console.log("Dolphins have a higher average score than koalas");
} else {
    console.log("Koalas have a higher average score than dolphins");
}

function determine(average_dol, average_koa) {
    if(average_dol > average_koa && average_dol >= 100){
        console.log("Dolphins win");
    } else if (average_koa > average_dol && average_koa >= 100) {
        console.log("Koalas win");
    } else if (average_dol == average_koa && average_dol >= 100 && average_koa >= 100) {
        console.log("It's a draw");
    } else {
        console.log("No team wins");
    }
}

//Data bonus 1:
var dolphins_bn1 = [97, 112, 101];
var koalas_bn1 = [109, 95, 123];

var average_dol_bn1 = (dolphins_bn1[0]+dolphins_bn1[1]+dolphins_bn1[2])/3;
var average_koa_bn1 = (koalas_bn1[0]+koalas_bn1[1]+koalas_bn1[2])/3;

console.log("Data bonus 1")
determine(average_dol_bn1, koalas_bn1)

//Data bonus 2:
var dolphins_bn2 = [97, 112, 101];
var koalas_bn2 = [109, 95, 106];

var average_dol_bn2 = (dolphins_bn2[0]+dolphins_bn2[1]+dolphins_bn2[2])/3;
var average_koa_bn2 = (koalas_bn2[0]+koalas_bn2[1]+koalas_bn2[2])/3;
console.log("Data bonus 2")
determine(average_dol_bn2, koalas_bn2)



