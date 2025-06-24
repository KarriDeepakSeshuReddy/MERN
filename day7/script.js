//Call back
// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// function greetStudent(name,callback){
//     setTimeout(() =>{
//         callback(name);
//     },1000);
// }
// greetStudent("Sriram", greet);

//Grocery Cart

// function createOrder(cb){
//     console.log("order creation");
//     cb();
// }

// function payOrder(cb){
//     console.log("Payment Done");
//     cb();
// }

// function createOrderSummary(){
//     console.log("Created Order Summary");
// }

// createOrder(() => payOrder (createOrderSummary));

//Bad side of callback

/*
 1. Callback Hell
 2. Inversion of control
*/

//NOTE - Callback Hell

/*
1. User Login
2. Add items in cart
3. Create Order
4. Pay order
5. Create Order summary
6. Update wallet

*/

// function login(cb) {
//   console.log("User Logged in");
//   cb();
// }

// function addItemToCart(cb) {
//   console.log("Added items to cart");
//   cb();
// }

// function createOrder(cb) {
//   console.log("order creation");
//   cb();
// }

// function payOrder(cb) {
//   console.log("Payment Done..");
//   cb();
// }

// function createOrderSummary(cb) {
//   console.log("Created Order Summary");
//   cb();
// }

// function updateWallet() {
//   console.log("Update wallet");
// }
// login(()=>addItemToCart(()=>createOrder(()=>payOrder(()=>createOrderSummary(()=>updateWallet())))));

//NOTE - Promises

//Defination
// Promise is an object which stores eventual completion or failure
//  of an asynchronous code

// function createOrder() {
//   console.log("Order created successfully!");
// }

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     createOrder();
//     resolve();
//   }, 2000);
// });

// console.log(promise);

//LINK - Callback hell via promise

/*
1. User Login
2. Add items to cart
3. Create Order
4. Pay order
5. Create Order summary
6. Update wallet
*/

// const login = new Promise((res, rej) => {
//   console.log("User Logged in");
//   res();
// });

// const addItemToCart = new Promise((res, rej) => {
//   console.log("Added items to cart");
//   res();
// });

// const createOrder = new Promise((res, rej) => {
//   console.log("Order creation");
//   res();
// });

// const payOrder = new Promise((res, rej) => {
//   console.log("Payment Done..");
//   res();
// });
// const createOrderSummary = new Promise((res, rej) => {
//   console.log("Created Order Summary");
//   res();
// });

// function updateWallet() {
//   console.log("Update wallet");
// }

// login.then(() => {
//   addItemToCart.then(() => {
//     createOrder.then(() => {
//       payOrder.then(() => {
//         createOrderSummary.then(() => {
//           updateWallet();
//         });
//       });
//     });
//   });
// });

//Inversion of control
//LINK - Callback hell via promise

/*
1. User Login
2. Add items to cart
3. Create Order
4. Pay order
5. Create Order summary
6. Update wallet

*/

// const login = () =>
//   new Promise((res, rej) => {
//     console.log("User Logged in");
//     rej();
//   });

// const addItemToCart = () =>
//   new Promise((res, rej) => {
//     console.log("Added items to cart");
//     res();
//   });

// const createOrder = () =>
//   new Promise((res, rej) => {
//     console.log("Order creation");
//     res();
//   });

// const payOrder = () =>
//   new Promise((res, rej) => {
//     console.log("Payment Done..");
//     res();
//   });
// const createOrderSummary = () =>
//   new Promise((res, rej) => {
//     console.log("Created Order Summary");
//     res();
//   });

// function updateWallet() {
//   console.log("Update wallet");
// }

// login()
//   .then(() => {
//     addItemToCart()
//       .then(() => {
//         createOrder()
//           .then(() => {
//             payOrder()
//               .then(() => {
//                 createOrderSummary()
//                   .then(() => {
//                     updateWallet();
//                   })
//                   .catch(() => console.error("Order summary failed!"));
//               })
//               .catch(() => console.error("Payment failed!"));
//           })
//           .catch(() => console.error("Create order failed!"));
//       })
//       .catch(() => console.error("Cart Items add failed!"));
//   })
//   .catch(() => console.error("user Login failed!"));

//NOTE - Promise.all

// async function userBehaviour() {
//   const login = new Promise((res, rej) => {
//     console.log("Login success");
//     res({ name: "Munit" });
//   });
//   const addItemToCart = new Promise((res, rej) => {
//     console.log("Item Added to Cart");
//     res("failed added item ");
//   });
//   const createOrder = new Promise((res, rej) => {
//     console.log("Order create successfully!");
//     res();
//   });
//   Promise.all([login, addItemToCart, createOrder])
//     .then((data) => {
//       console.log("promise run successfully!", data);
//     })
//     .catch((err) => console.log("failed!", err));
// }

//NOTE - Async Await

/*
1. User Login
2. Add items to cart
3. Create Order
4. Pay order
5. Create Order summary
6. Update wallet

*/

const login = () =>
  new Promise((res, rej) => {
    console.log("User Logged in");
    res({ name: "sriram" });
  });

const addItemToCart = () =>
  new Promise((res, rej) => {
    console.log("Added items to cart");
    rej("Failed to add item in cart!");
  });

const createOrder = () =>
  new Promise((res, rej) => {
    console.log("Order creation");
    res();
  });

const payOrder = () =>
  new Promise((res, rej) => {
    console.log("Payment Done..");
    res();
  });
const createOrderSummary = () =>
  new Promise((res, rej) => {
    console.log("Created Order Summary");
    res();
  });

function updateWallet() {
  console.log("Update wallet");
}

async function userBehaviour() {
  try {
    await login();
    await addItemToCart();
    await createOrder();
    await payOrder();
    await createOrderSummary();
    updateWallet();
  } catch (error) {
    console.log(error);
  }
}

userBehaviour();