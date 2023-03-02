//use of spread operator

let array1 = [1, 2, 3, 4];
let multiFn = (a, b, c, d) => {
  console.log([a * 2, b * 3, c * 4, d * 6]);
};
multiFn(...array1);

const array2 = "vedprakash";
const usingSpread = { ...array2 };
const usingSpreadArr = [...array2];
console.log(usingSpread);
console.log(usingSpreadArr);

//rest parameter

let funAdd = (...input) => {
  let sum = 0;
  for (let i of input) {
    sum += i;
  }
  return sum;
};

console.log(funAdd(1, 2, 3));

//employeessalary addition

let Employee = [
  {
    FirstName: "Prajjwal",
    lastName: "Ramanwal",
    city: "Indore",
    Salary: 50000,
  },
  { FirstName: "Vedprkash", lastName: "Verma", city: "Raipur", Salary: 30000 },
  { FirstName: "Pankaj", lastName: "Agarwal", city: "Ujjain", Salary: 40000 },
  { FirstName: "Deepak", lastName: "Baria", city: "Bhopal", Salary: 30000 },
];

let sal = 0;
for (let i = 0; i < Employee.length; i++) {
  // console.log(Employee[i])
  sal += Employee[i].Salary;
}
console.log(sal);
