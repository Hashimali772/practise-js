// 1 Step : 

const fName = "hashim ";
const lName = "ali";

console.log(fName + lName); // this is a old method of strings.

console.log(`My first name is ${fName} and my last name is ${lName}`); // This is a new method of strings.

// 2nd Step : 

const newString = new String("Hashim");

console.log(newString[2]); // Sqaure brackets to check the number of letter lenght.
console.log(newString.__proto__); 

console.log(newString.length); // for checking the lenght of a string as it's name.
console.log(newString.charAt(2)); // for checking postion of alphabet through counting number.
console.log(newString.indexOf('s')); // for checking the postion of alphabet in number.

const newAlpha = newString.substring(0, 4);
console.log(newAlpha); // use for print the string on dedicated number.

// 3rd Step :

const newGamma = newString.slice(-5, 5);
console.log(newGamma); // use for reverse the order

const spaceRemove = "  hashim  "
console.log(spaceRemove);
console.log(spaceRemove.trim()); // use for removing extra spaces.

const url = "https//www.hashim.com"

console.log(url.replace('hashim', 'ali'));
console.log(url.includes('hashim'));

const a = "Hashim";
const b = "Ali"

console.log(a.concat(',', b)); // to add a something else between two or more varaibles.
