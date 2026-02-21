/* let arr = [1, 2, 3, 4]        // modify array
arr[3] = 12; */



/* let arr = [12 ,11 ,10 ,4 ,9];     // forEach

arr.forEach(function (val) {
    console.log(val);
}) */



/* let arr = [12 ,11 ,10 ,4 ,9];        // map

let newarr = arr.map(function(val) {
    return 4;
}) */



/* let arr = [12 ,11 ,10 ,4 ,9];

let newarr = arr.map(function(val) {
    if (val > 10) return val;
}) */



/* let arr = [1,2,3,4,5,6,7,8,9];         // filter

let newarr = arr.filter(function(val) {
    if ( val > 4 ) return true;
}) */



let arr = [1,2,3,4,5,6,7,8,9];

let ans = arr.reduce(function(accumulator , val) {
    return  accumulator + val;
}, 0);