/*function abcd (){      // function declaration

}*/



/*let abcd = function(){      // function expression

}*/



/*let abcd = ()=> {       // fat arrow function

}*/



/*function dance (v1){
    console.log(`${v1} nach rha hai`)
}
dance("ghoda");
dance("gadha");
dance("billi");
dance("kutta");*/



/*function add (a1 , a2){
    console.log(a1 + a2);
}
add(1,2);
add(11,22);
add(111,222);
add(1111,2222);*/



/*function abcd(val){           // first class function
    val();
}

abcd(function (){
    console.log("hiiii");
})*/



/*function abcd (val){           // higher order function
    return function(){
    console.log("heyyyy")
    }
}

abcd()()*/



//  closures -> ek fn jo return kre ek aur fn aur return hone wala fn hamesha use krega parent fn ka koi variable 
/*function abcd(){
    let a = 12;
    return function(){
        console.log(a)
    }
}
abcd()();*/



/*function abcd(){            // lexical scoping
    let a = 4;
    function efgh(){
        let b = 5;
        function ijkl(){
            let c = 9;
        }
    }
}*/



/*(function (){                 //  IIFE   (immediately invoked function expression)
console.log("hiiii")
})();*/




/*function bmi (weight , height){        // BMI calculator
    return weight / (height*height);
}
console.log(bmi(46 , 1.7) . toFixed(2)); */



/*function discountcalculator(discount){      // discount calculator
    return function (price) {
     return price - price * (discount / 100) ;
   };
}
let discount = discountcalculator(10);
console.log(discount(200)); */



/*function discountCalculator (discount) {      // discount calculator
return function (price){
  return price - price * ( discount / 100 )
  };
}
let ten = discountCalculator (10);
let twenty = discountCalculator (20);

console.log(ten(1200));
console.log(twenty(1200));*/



/*function counter () {          // closures
    let count = 0;
    return function () {
        count ++;
    return count ;   
 }
}
let c = counter ();
console.log(c()); */



/*function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
  };
}

const fn = outer();
fn(); */
