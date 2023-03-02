//promise

const bucket=["vegetable","rice","salt","oil","coffee"]

let friedRicePromise= new Promise((resolve, reject) => {
    if(bucket.includes("vegetable")&&bucket.includes("salt")&&bucket.includes("rice")){
        resolve("we make it")
    } else(
reject("we cant do this")
    )
    
})

//how to consume

friedRicePromise.then(
    //jab prommise resolve hoga
    (onSucceed)=>{console.log("lets start",onSucceed)},
    //jab promise reject hogi
   // (onError)=>{console.log(onError)}
).catch((error)=>{console.log(error,"gya ab")})