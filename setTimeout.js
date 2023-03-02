console.log("script start");

function hello1() {
  console.log("hello world");
}
let add = (a, b) => {
  console.log(a + b);
  hello2();
};
function hello2() {
  console.log("hello world2");
  hello1();
}

setTimeout(() => {
  add(13, 17);
}, 3000);

console.log("script end");
