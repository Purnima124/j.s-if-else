const r=require("readline-sync")
var ch=r.question("enter te charater ")
if (ch.includes("ch")){
    console.log(ch+"ing")
}else if (ch.includes("ing")){
    console.log(ch+"ly")
}else{
    console.log(ch+"lying")
}

// var a="ok,hi.loo";
// var b=a.includes("hi")
// console.log(b)