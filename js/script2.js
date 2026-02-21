//let a = 12;
//let b = a;

/*function getGrade(score){
    if(score >= 90 && score <= 100){
        return "A+";
    }
    else if (score >= 80 && score <=89){
        return "A";
    }
    else if(score >=70 && score <=79){
        return "B";
    }
    else if (score >=60 && score <=69){
        return "C";
    }
    else if (score >=33 && score <=59){
        return "D";
    }
    else if (score >=0 && score <=32){
        return "Fail";
    }
    else{
        return "Invalid marks";
    }
}
console.log(getGrade(80));*/




/*function rps(user , computer){
    if (user === computer) return"draw";
    if (user === "rock" && computer === "sessior") return "rock";
    if (user === "rock" && computer === "paper" ) return"paper";
    if (user === "sessior" && computer === "paper" ) return"sessior";
    if (user === "sessior" && computer === "rock" ) return"rock";
    if (user === "paper" && computer === "rock" ) return"paper";
    if (user === "paper" && computer === "sessior" ) return"sessior";
}

console.log(rps("rock" , "paper"));*/



/*function rps(user , computer){
    if (user === computer) return"draw";
    if (user === "rock" && computer === "sessior") return "user won";
    if (user === "sessior" && computer === "paper" ) return"user won";
    if (user === "paper" && computer === "rock" ) return"user won";

return("computer won");
}

console.log(rps("rock" , "paper"));*/


/*for( let i=1; i<=10; i++){
    console.log(i);
}*/


/*let i =10
while(i>=1){
    console.log(i);
    i--;
}*/


/*for (let i =0; i<=20; i+=2){
    console.log(i);
}*/


/*for ( let i=1; i<=20; i++){
    if(i%2 === 0 ){
        console.log(i);
    }
}*/


/*i=1;
while(i<+15){
    console.log(i);
    i+=2;
}*/


/*let i = 1;
while ( i <= 15){
    if ( i%2 === 1){
        console.log(i);
    }
    i++;
}*/


/*for ( let i=1; i<=10; i++){
    console.log(`5*${i} = ${5*i}`);
    }*/


   /* sum = 0;
   for ( let i=1; i<=100; i++){
    sum = sum + i;   
   } 
console.log(sum);*/


/*for ( let i=1; i<=50; i++){
    if(i%3 === 0){
        console.log(i)
    }
}*/


/*let val = prompt("enter a number");
for (let i=1; i<=val; i++){
    if(i%2 === 0){
        console.log(`${i} is even `)
    }
    else {
        console.log(`${i} is odd`)
    }
} */


/*for( let i=1; i<=100; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log(i)
    }
} */
    
    
/*for( let i=1; i<=100; i++){
    console.log(i);
    if(i%7 === 0 ){
        break;
    }
}*/


/*for( let i=1; i<=20; i++){
    if(i%3 === 0)
        continue;
    console.log(i);
}*/


let count = 0;
for ( let i=1; i<=100; i++){
    if (i%2 == 1){
        count++;
        console.log(i);
    }

    if (count === 5 )
        break;
}