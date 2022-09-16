console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;
console.log("Basket is ", basket);
function addItem(item) {
  if (isFull() === false) {
    basket.push(item);
    return true;
  }
  if (isFull() === true) {
    return false;
  }
} //end of addItem

console.log("Adding apple (expect true)", addItem("apple"));
console.log("Adding lime (expect true)", addItem("lime"));
console.log("Adding mango (expect true)", addItem("mango"));
console.log("Adding orange (expect true)", addItem("orange"));
console.log("Adding lemon (expect true)", addItem("lemon"));
console.log("Adding banana (expect false)", addItem("banana"));
console.log("Adding pineapple (expect false)", addItem("pineapple"));
console.log("Items in the basket are", basket);

function listItems(item) {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i], "in the basket");
  }
} //end of listItems
listItems();

function empty() {
  while (basket.length > 0) {
    basket.pop();
  }
} //end of empty
//empty()

console.log("Empty the basket", basket);

function isFull() {
  if (basket.length < maxItems) {
    return false;
  }
  if (basket.length >= maxItems) {
    return true;
  }
} //end of isFull
console.log("The basket is full?", isFull());

function removeItem(item) {
  // if(basket.indexOf === item ){
  //     basket.slice( 0, 1, item );
  // } else{
  //     return null;
  // }
  if (basket.indexOf(item)) {
    basket.splice(basket.indexOf(item), 1);
  } else {
    return null;
  }
} //end of removeItem
console.log("No more limes", removeItem("lime"));
console.log(basket);
