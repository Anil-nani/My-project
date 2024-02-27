const myName=document.querySelector(".myclass")
const myBody =document.body
myBody.style.display="flex"
myBody.style.alignItems="center"
myBody.style.justifyContent="center"
myBody.style.height="100vh"
myBody.style.width="100%"
const myhero=document.querySelector("#Hyper")
function myfunc(){
    const red=math.floor(MathMath.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)
    const randomcolor=`rgb(${red},${green},${blue})`
    return randomcolor
}
myName.addEventListener("click",()=>{
    const randomcolor=myfunc()
    myBody.style.backgroundColor=randomcolor
    myhero.textContent=randomcolor
    console.log(randomcolor)
})