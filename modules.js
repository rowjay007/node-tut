// const amount = 12;

// // if (amount < 10) {
// //   console.log("small number");
// // } else {
// //   console.log("large number");
// // }

// const number =
//   amount < 10 ? console.log("small number") : console.log("large number");

// console.log(`Hey!! Its' my first node app`);

const { gabby, fola } = require("./names");
const sayHi = require("./utils");
const data = require("./alternate");
console.log(data);

sayHi("Daisy ");
sayHi(gabby);
sayHi(fola);


// OS Modules 

const os = require("os");

//info on current user

const user = os.userInfo();
console.log(user);

//The system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);