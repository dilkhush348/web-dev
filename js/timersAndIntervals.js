/* let count = 10;

let interval = setInterval( function () {
    if ( count >= 0 ) {
        console.log(count);
        count--;
    }
    else 
        clearInterval(interval);
} , 1000) */



/* let count = 0;

let process = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");

let interval = setInterval( function () {
     if ( count <= 99) {
        count++;
        process.style.width = `${count}%`;
        percentText.textContent = `${count}%`;
     }
     else 
        document.querySelector("h2").textContent = "downloaded";
    console.log(interval)
}, 30); */



let alertBanner = document.getElementById("alertBanner");
let closebtn = document.querySelector("#closeAlert");

alertBanner.classList.add("show");

setTimeout( function () {
    alertBanner.classList.remove("show");
}, 3000);

closebtn.addEventListener("click" , function () {
    alertBanner.classList.remove("show");
})