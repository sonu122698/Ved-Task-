const fun2 = () =>
  setTimeout(() => {
    console.log("fun2");
  }, 3000);

const fun1 = () => {
  console.log("Fun1");
  fun2();
  console.log("fun End");
};
fun1();
