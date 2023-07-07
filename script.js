let box_one = document.querySelector("div.box1");
let body  = document.querySelector("body");
let h1 = document.querySelector("h1");
let h1_border = document.querySelector("h1 border");

box_one.addEventListener("mouseover", e =>{
    body.style.backgroundColor = "blue";
});

box_one.addEventListener("mouseleave", e =>{
    body.style.backgroundColor = "white";
});

h1.addEventListener("mouseover", e =>{
    body.style.backgroundColor = "skyblue";
});

h1.addEventListener("mouseleave", e =>{
    body.style.backgroundColor = "white";
});

h1.addEventListener("mouseleave", e =>{
    h1.style.border = "5px solid"
})