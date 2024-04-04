// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

let set = new Set();
let mary = { name: "Mary", age: 20 };
let John = { name: "John", age: 23 };

console.log(set);
set.add(mary);
set.add(mary); // The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.
set.add(John);
console.log(set);
set.delete(mary);
console.log(set);


// Destructuring Assignment

let names = ["Adebayor", "Olubisi"];
let [firstName, lastName] = names;

console.log(names[0])

let settings = {theme: "dark", fontSize: 20, fullScreen: true}
let {theme, fontSize, fullScreen} = settings;
// alert(settings.theme)