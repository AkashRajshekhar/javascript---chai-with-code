//first way
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task ");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promised consumed ");
});

//2nd way by storing in variavle

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async 2 is executed ");
    resolve();
  }, 2000);
});

promiseOne.then(() => {
  console.log("promiseOne is consumed ");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "akash", email: "ars@gmail.com" });
  }, 3000);
});
promiseThree.then((user) => {
  console.log(user);
});

const promisefour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      console.log("user details");
      return resolve({ username: "shaktiman", gmail: "shakti@gmail.com" });
    } else {
      console.log("something went wrong , error occur ");
    }
  }, 4000);
});
promisefour
  .then((user) => {
    console.log(user);

    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(`error occured , ${err}`);
  })
  .finally(() => {
    console.log("the promise is either resolved or reject ");
  });

//with async await

const promisefive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      console.log("user details");
      return resolve({ username: "shaktiman", gmail: "shakti@gmail.com" });
    } else {
      console.log("something went wrong , error occur ");
    }
  }, 4000);
});
const consumePromise = async (user) => {
  try {
    const response = await promisefive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

consumePromise();

//by iffe if we want to use without storing in variable and with useing arrow function

// const  consumePromise = async (user)=>{

//     const response  = await promisefive
//     console.log(response)
// };

// consumePromise()

