// let obj = {
//     name : "sushant",
//     age : 23,
//     fun: function()
//     {
//         console.log("I am function");
//     },
//     arr: [20,30,40]
// }
// console.log(obj.name);
// obj.fun();
// console.log(obj.arr);
// console.log(obj);

// let arr = [
//     {"user":1, name: "tate"},
//     {"user": 2, name: "andy"},
//     {"user": 3, name : "sandy"}
// ]
// for(i in arr)
// {
//     console.log(arr[i]);
// }
// for(i of arr) // directly prints the arr
// {
//     console.log(i);
// }

// --------------------------------------------------------------------------------------------------------------------//
// let arr = [
//     {"user":1, name: "tate"},
//     {"user": 2, name: "andy"},
//     {"user": 3, name : "sandy"}
// ]
// let[item1, item2 ] = arr;
// console.log(item1);
// console.log(item2);
// let[{name}, ,{name:name1}] = arr;
// console.log(name);
// console.log(name1);

// --------------------------------------------------------------------------------------------------------------------//

// functions inside functions...
// function fun()
// {
//     console.log("This is first function");
//     function fun2()
//     {
//         console.log("This is second function");
//     }
//     fun2();
// }
// fun();
// -------------------------------------------------------------------------------------------------------------------//
// debugger.....

// function fun()
// {
//     debugger;
//     for(let i = 1; i<6; i++)
//     {
//         console.log(i);
//     }
// }
// fun();

// sets.....

const a = new Set([1,2,3,4,5]);
console.log(a);
a.add(5);
console.log(a);
//map...

var map1 = new Map([[1,"one"],["fname","sushant"],["lname","pathak"],["whole number ",[0,1,2,3,4,5,6,7,8,9]]]);
console.log(map1);
console.log(map1.get("fname"));
var k = map1.keys();
console.log(k);

for(var key of k)
{
    console.log(key);
}











