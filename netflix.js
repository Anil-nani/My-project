let myinputbox1=document.getElementById("input1")
myinputbox1.addEventListener("focus",()=>{
   myinputbox1.style.borderColor="red"
})
let myinputbox2=document.getElementById("input2")
myinputbox2.addEventListener("focus",()=>{
   myinputbox2.style.borderColor="red"
})
let mybutton1=document.getElementById("btn1")
mybutton1.addEventListener("click",myfunc1)
function myfunc1(){
    alert("please Enter your details corretly")
}
let mybutton2=document.getElementById("mybtn")
mybutton2.addEventListener("click",myfunc2)
function myfunc2(){
    alert("please Enter your singn-code")
}