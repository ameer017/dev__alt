// Array are used to store ordered collections.
// Two syntax --> let arr = new Array() || let arr = []

let fruits = ["Banana", "Orange", "Watermelon", "Apple"];

// alert(fruits[2]);

fruits[3] = "Grape";
console.log(fruits);

// Array methods:
//length :: The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.
console.log(fruits.length);

fruits.push("Pineapple");
console.log(fruits);

fruits.pop();
console.log(fruits);

// Array inside array
let cohort = [
  ["Kenny", "Soliu", "Hayzed"],
  ["Kenny", "Nafisat", "Zainabuu"],
  ["Lateef", "Abdullah", "Tunmise"],
];

// alert(cohort[1][2])
console.log(cohort[1][2]);

console.log(cohort.slice(1));
console.log(cohort.splice(0, 1));
console.log(cohort.map((item) => item.length));
