let mybutton=document.getElementById("btn")
mybutton.style.backgroundColor="red"
mybutton.style.color="white"
let mydiv=document.querySelector("#thediv")
mydiv.style.textAlign="center"
mydiv.style.backgroundColor="green"
mydiv.style.color="white"
mytext=document.querySelector("#para")
mytext.style.color="blue"
mytext.style.textAlign="center"
mybutton.addEventListener("click",myfunc)
function myfunc(){
    console.log("who are cliked me")
}