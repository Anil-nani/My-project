const division =document.querySelector(".mydiv")
 let myBody=document.body
myBody.style.display="flex"
myBody.style.alignItems="center"
myBody.style.justifyContent="center"
myBody.style.height="100vh"
myBody.style.width="100%"
let mybtn=document.getElementById("btn")
mybtn.style.backgroundColor="green"
mybtn.style.color="white"
let mytext=document.querySelector("#heading")
mytext.style.color="white"
function myfun(){
    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)
    randomColor=`rgb(${red},${green},${blue})`
    return randomColor
}
division.addEventListener("click",()=>{

    const randomColor=myfun()
    myBody.style.backgroundColor=randomColor
    mytext.textContent=randomColor
    console.log(randomColor)
})