const a=4
const b=6
let x=() => {return a+b+100}
console.log(x(a,b))

const array1=[1,2,3,4];
const array2=[5,6,7,8];
let totalArray=[...array1,...array2]
console.log(totalArray)

let arraytotal2=array1.concat(array2)
console.log(arraytotal2)

//spread operator
let dd="tarun"
let sp=[...dd]
console.log(sp)

const arr33=[1,2,3,4,5]
const add=(a,b,c,d,e)=>{
    return a+b+c+d+e
};
console.log(add(...arr33))


const arr34=[1,2,3,4,5]
const add2=(a,b,...rest)=>{
    return a+b
};
console.log(add2(...arr34))


const myName={fname:"tarun",
lastN:"verma"
}
const bio={
fname:"ved",
lastN:"sharma",
city:"indore",
...myName
}
console.log(bio)
//neeche wali value preferance me rhegi
const bio2={...myName,
    fname:"ved",
    lastN:"sharma",
    city:"indore"
    
    }
    console.log(bio2)


