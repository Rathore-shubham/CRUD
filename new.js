// setTimeout(() => console.log("1"), 0);
// Promise.resolve().then(() => console.log("2"));
// console.log("3");

// import { ChildProcess } from "child_process";



// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const fn = outer();
// fn();
// fn();
// fn();


// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         console.log(count)
//     }
// }

// const fn = outer();


// function fetchData() {
//     return Promise.resolve("Done")
// }

// fetchData().then((res) => console.log(res))


// async function fetchData() {
//     return "Done"
// }


// async function main() {
//     const data = await fetchData();
//     console.log(data)
// }

// main()



// async function test() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }

// test();
// console.log("3");


// const obj1 = { 
//     a: 1,
//     b: { 
//         c: 2
//     }
// }

// const obj2 = obj1;

// const mat = obj2.b.c = 40;
// console.log(mat)


// const original = { x: 1, y: { z: 2 } };
// const copy = { ...original };

// copy.y.z = 100;

// console.log(original.y.z); // ??


// const deep = JSON.parse(JSON.stringify(original));



const arr = [2,3,4,5,6,7];

// console.log(arr.map(x => x * 2))

// const res = arr.filter(x => x > 5)
// console.log(res)

const sum = arr.reduce((acc,val) => acc + val, 0);
console.log(sum)




