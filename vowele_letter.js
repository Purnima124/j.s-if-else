const r=require("readline-sync")
var letter=r.question("Enter the letter ")
if(letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u"){
    console.log(letter,"vovel")
}
else{
    console.log(letter,"conshonant")
}