const fn = (a, b, c) => console.log(a + b + c);

const arr = [1, 2, 3];

//fn(arr[0], arr[1], arr[2]);
//fn(...arr);

const arr1 = [5, 6];

//const arr2 = arr.concat(arr1)

const arr2 = [...arr, 3, 2];
const arr3 = arr;
arr[0] = "chanchito feliz";

//console.log(arr, arr2, arr3);
//

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 5, c: "chancho" };

const obj3 = { ...obj1 };

console.log(obj3);
