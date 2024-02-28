


const myinput = document.getElementById("input")
const mybtn = document.getElementById("add")
const mylist = document.getElementById("list")

mybtn.addEventListener("click",myfunc);

function myfunc(){
    // mylist.innerHTML =myinput.value
   if(myinput.value ===''){
alert('Please Enter your enter your task') 
   }else{
    let nlist =document.createElement("li")
    nlist.innerHTML =myinput.value
     mylist.prepend(nlist)
       myinput.value =""
     let del = document.createElement("button")
       del.innerHTML ="del"
       
       nlist.appendChild(del)
       del.addEventListener("click" , mydel);
       function mydel(){
            nlist.remove()
       }


       let edit =document.createElement("button")
       edit.innerHTML ="edit"
       nlist.appendChild(edit)
       
       edit.addEventListener("click", myedit);
       function myedit(){
        
          
         del.remove()
         edit.remove()
         nlist.remove()
         myinput.value =nlist.innerText
        
       }

   
    }
   }
        