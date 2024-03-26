/**
 * A user store object
 * @type {object}
 */
const userStore = {
  ameer: {
    firstName: "Al Ameer",
    lastName: "Abdullah",
    email: "fake123@mail.com",
    profession: "Computer programmer",
    password: "0809ja4life",
  },
  kanasjr: {
    firstName: "Nasihud Deen",
    lastName: "Jimoh",
    email: "nasihudeen04@gmail.com",
    profession: "Software Engineer",
    password: "jathozamanzee",
  },
};

/**
 * A function to validate the username
 * @param {string} username
 * @returns boolean
 */
function validateUsername(username) {
  if (!username) return false;
  if (username.length > 10) return false;
  return true;
}

/**
 * A function to validate the password
 * @param {string} password
 * @returns boolean
 */
function validatePassword(password) {
  if (!password) return false;
  if (password.length < 6 || password.length > 15) return false;
  return true;
}

/**
 * A function to display user details
 */
function getUserDetails() {
  alert("Welcome!");

  let username = prompt("Enter your username");

  while (!validateUsername(username)) {
    if (username === null) return;
    username = prompt("Enter your username. Username must be less than 10");
  }

  let password = prompt("Enter your password");

  while (!validatePassword(password)) {
    if (password === null) return;
    password = prompt("Enter your password.");
  }

  let passwordAgain = prompt("Enter your password again");

  while (password !== passwordAgain) {
    if (passwordAgain === null) return;
    passwordAgain = prompt(
      "Password do not match! Confirm your password again."
    );
  }

  const userDetails = userStore[username];

  if (!userDetails) {
    alert(`User ${username} does not exist. Please register`);
    return;
  }

  if (userDetails.password !== password) {
    alert(`Password is incorrect. Please try again`);
    return;
  }

  alert(`Showing details for ${username}: \n
      First Name: ${userDetails.firstName} \n
      Last Name: ${userDetails.lastName} \n
      Email: ${userDetails.email} \n
      profession: ${userDetails.profession}
    `);

  alert("Ok, Goodbye");
}

getUserDetails();
