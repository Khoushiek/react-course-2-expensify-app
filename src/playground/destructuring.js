// object destructuring

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//   }
// };

// const {name:publisherName = "Self Published"} = book.publisher;

// console.log(publisherName);

// Array Destructuring

const item = ['Coffee (Ice)', '$2.00', '$2.50', '$2.75'];

const [itemtype, ,mediumCoffeePrice] = item;

console.log(`A ${itemtype} costs ${mediumCoffeePrice}`);