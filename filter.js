const cricketer=[
    {name:"kl rahul",role:"openar",team:"LSG"},
    {name:"ravindra jadeja",role:"all arounder",team:"CSK"},
    {name:" ravi ashwin",role:"bolwer",team:"RR"},
    {name:"jonny bairstow",role:"wk",team:"PBKS"},
    {name:"m stonies",role:"all arounder",team:"LSG"},
    {name:"m siraj",role:"bowler",team:"RCB"},
    {name:"W saha",role:"wk",team:"GT"},
    {name:"d conway",role:"openar",team:"CSK"},
]


let  myfunc=cricketer.filter((cric)=>{
return cric.team==='CSK'
})

console.log(myfunc)



