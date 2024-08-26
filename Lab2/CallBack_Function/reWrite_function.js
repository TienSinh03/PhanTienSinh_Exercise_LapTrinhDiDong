var arr = [4,5,8,4,14,62,48];

// rewrite function: callback function: every, map, reduce, reduceRight, filter, find...

Array.prototype.myfilter = function(callback) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        
        if(callback(this[i])) {
            newarr.push(this[i]);
        }
    }
    return newarr;
}

var mycb = (num) => {
    return num > 14;
};

var fn  = arr.myfilter(mycb);
console.log(fn); 

// every
Array.prototype.myEvery = function(callback) {

    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
};

var every = arr.myEvery(mycb);
console.log(every);

// map
Array.prototype.myMap = function(callback) {
    let newarr = [];
    for (let i = 0; i < this.length; i++) {
            newarr.push(callback(this[i]));     
    }
    return newarr;
}

var mymap = (num) => {
    return num * 2;
};

var map = arr.myMap(mymap);
console.log(map);

// reduce
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue; // initial value la gia tri dau tien gan cho accumlator
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
}

var myreduce = (accumulator, num) => {
    return accumulator + num;
};

var reduce = arr.myReduce(myreduce, 0);
console.log(reduce);


