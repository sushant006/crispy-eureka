// console.log("hello")
// setTimeout(()=>{
//     console.log("Welcome...")
// }, 0)
// console.log("This is sushant")
// // callback...
// function fun(val)
// {
//     console.log(val);
// }
// function add(a,b,callback)
// {
//     let sum = a+b;
//     callback(sum);
// }
// add(4,5,fun);




// callback hell...
function loadingData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("1) loading data...");
            resolve();
        }, 2000)
    })
}
function collectingData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(" 2) collecting data...");
            resolve();
        }, 2000)
    })
}
function approvingData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("3) data is under process...");
            reject("Not Fullfilled...");
        }, 2000)
    })
}
function approved() {
    console.log(" 4) approved data...")
}
// loadingData(function () {
//     collectingData(function () {
//         approvingData(function () {
//             approved();
//         });
//     });
// });
// loadingData().then(collectingData).then(approvingData).then(approved).catach((err)=>{console.log(err)})


// async and await

async function ex()
{
    await loadingData();
    await collectingData();
    await approvingData();
    await approved();
}
ex().catch((err)=>{
    console.log(err);
})



























