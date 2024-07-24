/* 
document.title ="Hello world"

console.log(document.title)
console.log(document.body) */
/* document.body.style.backgroundColor = "red" */

/* let square =document.getElementsByClassName("box")
console.log(square) */

/* let square =document.getElementById("red").style.backgroundColor = "red" */

let button = document.getElementById("btn")
button.addEventListener("click",()=>{
   /*  alert("Hello world") */
 document.getElementsByClassName("box"). innerHTML = "Hello world";
})