
let apiFN= ()=>{console.log("hello USA")}

const getData=async()=>{
    let a=await "hello world"
    console.log(a)
}
const setData=async()=>{
    let b=await"hello India"
    console.log(b)
}
getData()
setData()
console.log("1")
apiFN()
console.log("2")
