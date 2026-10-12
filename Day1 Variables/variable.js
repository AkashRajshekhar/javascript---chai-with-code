const accountId = 12; //Never change
let accountHolder = "Akash Rajshekhar"; // we can change but follow scope
var accountPassword = "12345"; // changed  but dont follow scopes
let accountState = "up";

branch = "Ait";

console.log("this is the account info "); //-> prints the items

console.table([
  accountId,
  accountHolder,
  accountPassword,
  accountState,
  branch,
]);

// accountId =56; // const can not change
accountHolder = "Rakesh";
accountPassword = "4567";

accountState = " mp";
console.table([
  accountId,
  accountHolder,
  accountPassword,
  accountState,
  branch,
]); //-> this function  prints in table

console.log(typeof branch);
