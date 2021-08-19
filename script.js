var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bg = document.getElementById("gradient");

color1.addEventListener("input", function(){
    bg.style.background = "linear-gradient(to right, " +
    color1.value + " ," + color2.value + ")";
});

color2.addEventListener("input", function(){
    bg.style.background = "linear-gradient(to right, " +
    color1.value + " ," + color2.value + ")";
});

//var a = (a,b) => a + b; // New way of declaring a function

