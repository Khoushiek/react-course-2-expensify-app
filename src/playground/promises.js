const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "Khoushiek",
      age: 32
    });
  },
  5000
  )
});

console.log("before");

promise.then(() => {
  console.log("resolved")
});

console.log("after");