// Data Types - Number, BigInt, String, Boolean (true/false), Null, Undefined, Object, Symbol

//Numbers
let size_in_meters = 20; //integer
let size_in_inches = 2.1024; //floating point number
let maxSize = Infinity; // positive infinity
let minSize = -Infinity; //negative infinity
let not_a_number = NaN; //not a number e.g "hello" / 2

let sum = 20 + 23.1;
let difference = 20 - 10;
let multiplication_result = 20 * 10;
let division_result = 20 / 2;

//BigInt
let very_big_number = 872765678901234567890123567890134567890n;
let another_big_number = BigInt(872765678901234567890123567890134567890);

//Strings
let name = "Ayodeji Falz";
let name2 = "Ayodeji Remi";
let name3 = `Ayodeji Azeez`;

let firstName = "Ayodeji";
let lastName = "Azeez";
let fullName = `Mr ${firstName}${lastName}`;

let message =
  "Hello my friends\n My name is Al Ameer\n I am a software engineer";
console.log(message.toUpperCase());
// 'HELLO MY FRIENDS\n MY NAME IS JOHNSON\n I AM A SOFTWARE ENGINEER'
console.log(message.startsWith("Hello"));
// true
console.log(message.indexOf("name"));
// 21
console.log("\u{1F60D}");
// alert(message)
//Boolean
let isBigSize = true; //Yes, the size is big
let sizeIsSmall = false; //No, the size is not small

//Null type
let size = null;
let num = null;

//undefined type
let weight; //The variable size is undefined by default
// alert(weight);
let age = undefined; //This can be done explicitly as well (Not recommended)

//Objects
let user1 = {}; //Recommended way
let user2 = new Object();
user1["name"] = "Azeez";
user1["age"] = 20;
user1["username"] = "azeez123";
user1["email_verified"] = true;

console.log(user1);

let user3 = {
  name: "John Doe",
  age: 20,
  weight: 20.3,
  verifiedUser: true,
  "profile setting": {
    theme: "dark",
    font_size: 20,
    show_my_profile_picture: true,
  },
};

console.log(user3);
let user = {
  name: "John Doe",
  age: 20,
  weight: 20.3,
  verifiedUser: true,
};

console.log(user["name"]);
console.log(user.age);
delete user.weight;



