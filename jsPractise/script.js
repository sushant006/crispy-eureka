console.log("This is Sushant, I am learning javascript...");
let name = ["john", "Khali", "Kane"];
let a = name.slice(0,1);
console.log(a);
// console.log(name);
name.push("Undertaker"); // adds anything to the last of the array
console.log(name);
name.unshift("sting"); // adds anything to the first index of the array
console.log(name);
name.splice(1,1); //splice deletes, like here, starting from index 1 it deletes one element
console.log(name);
name.splice(1,0,"Cena");// here, from index 1 it deletes 0 elements and puts "Cena" at index 1
console.log(name);

let num = [10,20,30,40,50,60,70];
num.forEach((val)=>{
    console.log(val);
})

// num.map((val)=>{
//     console.log(val+10);
// })

let updated = num.map((val)=>{
    return val+10;
})
console.log(updated);

let filtered = num.filter((val)=>{
    if(val>=40 && val<=70)
    {
        return val;
    }
})
console.log(filtered);