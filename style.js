const four = document.querySelector("#four");
const five = document.querySelector("#five");
const white = document.querySelector("#white");
const submit = document.querySelector("#btn");

four.addEventListener("mouseover", function(){
    four.style.backgroundColor = " hsl(217, 12%, 63%)";
})
five.addEventListener("mouseover", function(){
    five.style.backgroundColor = "hsl(25, 97%, 53%)";
    five.style.cursor = "pointer";
})
white.addEventListener("mouseover", function(){
    white.style.backgroundColor = "hsl(0, 0%, 100%)";
    white.style.cursor = "pointer";
    submit.style.color = "hsl(25, 97%, 53%)";
})
