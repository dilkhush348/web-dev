/* let p = document.querySelector("p");     // select the paragraph first

p.addEventListener("click" , function(){      // then add event listner
    p.style.color = "green";               // change color to green when clicked
}); */



/* let p = document.querySelector("p");

p.addEventListener("dblclick", function () {
    p.style.color = "yellow";
}); */



/* let inp = document.querySelector("input");

inp.addEventListener("input" , function(dets) {
   if(dets.data !== null){
    console.log(dets.data);
   }
}) */



/* let sel = document.querySelector("select");
let device = document.querySelector("#device");


sel.addEventListener("change" , function (dets) {
   device.textContent = `${dets.target.value} device selected`;
}); */



/* let h1 = document.querySelector("h1");

window.addEventListener("keydown" , function(dets) {
    if (dets.key === " ") {
        h1.textContent = "SPC" ;
    }
    else {
        h1.textContent = dets.key;
    }
}) */



/* let btn = document.querySelector("#btn");
   let fileinp = document.querySelector("#fileinp");

    btn.addEventListener("click", function () { 
        fileinp.click();
    })

    fileinp.addEventListener("change" , function(dets) {
        const file = dets.target.files[0];
        if (file) {
            btn.textContent = file.name;
        }
    }) */



/* let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit" , function (dets) {
    dets.preventDefault();

let card = document.createElement("div");
card.classList.add("card");

let profile = document.createElement("div");
profile.classList.add("profile");

let img = document.createElement("img");
img.setAttribute("src" , input[0].value);

let h3 = document.createElement("h3");
h3.textContent = input[1].value;

let h5 = document.createElement("h5");
h5.textContent = input[2].value;

let p = document.createElement("p");
p.textContent = input[3].value;

profile.appendChild(img);
card.appendChild(profile);
card.appendChild(h3);
card.appendChild(h5);
card.appendChild(p);

 main.appendChild(card);

 input.forEach(function (inp) {
    if (inp.type !== "submit") {
        inp.value = "";
    }
 })
}) */



 /*let abcd = document.querySelector("#abcd");

 abcd.addEventListener("mouseover" , function() {
    abcd.style.backgroundColor = "lightgreen";
 })

 abcd.addEventListener("mouseout" , function() {
    abcd.style.backgroundColor = "azure";
 }) */



/* let ul = document.querySelector("ul");

ul.addEventListener("click" , function(dets) {
    dets.target.classList.toggle("lt");
}) */



    let inp = document.querySelector("input");
    let span = document.querySelector("span");

    inp.addEventListener("input" , function() {
        let left = 20 - inp.value.length;
        span.textContent = left;

        if (left < 0) {
            span.style.color = "red";
        }
        else {
            span.style.color = "white";
        }
    }) 