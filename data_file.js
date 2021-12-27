// const fs=require("fs");
// const obj={
//     name:"purnima",
//     mobile_no:8969871625,
//     plass:"Bihar",
//     age:23
// }
// const jsonData=JSON.stringify(obj)
// fs.writeFile("json1.json",jsonData,(err)=>{
  
//     console.log("done")
// })

// 2

const fs=require("fs")
let obj={
    name:"purnima",
    lastname:"kumari",
    age:23
}
const jsonData=JSON.stringify(obj)
// fs.writeFile("hiii.json",jsonData,(err)=>{
//     console.log("done")
// })
const objData=JSON.parse(jsonData)
console.log(objData)

fs.writeFile("kkkk.json",jsonData,(err)=>{
    console.log("done")
})