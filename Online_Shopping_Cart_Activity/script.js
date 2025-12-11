//1
let products = [
{ name : "Laptop" , price : 35000, category: "Electronics"},
{ name : "Headphones" , price : 1500, category: "Accessories"},
{ name : "Mouse" , price : 500, category: "Accessories"},
{ name : "Phone" , price : 2000, category: "Electronics"},
{ name : "USB Cable" , price : 150, category: "Accessories"},
{ name : "Smart Watch" , price : 5000, category: "Electronics"},
];
//2
products.sort(function(a,b){
 return a.price - b.price;
});
//3
products.forEach(function(product, index){
 console.log(index +";" + product.name + " - ₱" +
    product.price + "(" + product.category + ")");
});
//4
let cart = [];
//5
function addToCart (productName) {
 let found = false;
 for(let i = 0; i < product.length; i++){
    if(products [i].name === productName){
      cart.push(products [i]);

      console.log(productName + "added to cart!");
      found = true;
      break;

    
    }
}
  if(!found){
 console.log("Product not found!");
    }
}
//6
addToCart("Laptop");
addToCart("Mouse");
addToCart("Phone");

console.log("Current cart:" , cart);

//7

function removeLastItem(){
  if (cart.length > 0 ) {
    let removed = cart.pop();
    console.log(removed.name + " removed from cart");
  }else{

    console.log("Cart is empty!");
  }
}
//8

function removeLastItem(){
  if (cart.length > 0 ) {
    let removed = cart.shift();
    console.log(removed.name + " removed from cart");
  }else{

    console.log("Cart is empty!");
  }
}

//9

function showCart(){
 console.log("=== CART (" + cart.length + " items ) ===");
 cart.forEach(function (item , index ){
 console.log(index + ":" + item.name + " - ₱" + item.price);
   });
}

//10

function getTotalPrice (){
  return cart.reduce(function (sum, item) {
  return sum + item.price;
  }, 0);
}

console.log("Total price: ₱" + getTotalPrice());


removeLastItem ();
showCart ();
console.log("Total price: ₱" = getTotalPrice());

//11

function getElectronics () {
 return cart.filter(function(item) {
    return item.category === "Electronics";

 });
}

console.log("Electronics in cart:" , getElectronics)

//12
 function applyDiscount(cartItems, discountPercent) {
  return cartItems.map(function(item){
  return{
    orignalPrice: item.price,
    discountedPrice : item.price * (1 - discountPercent / 100)
  };
 });
}

let discountedCart = applyDiscount(cart, 10);
console.log("Cart with 10% discount:", discountedCart);

//13

function checkout (){
  let total = getTotalPrice();
  console.log("Original total: ₱" = total);

  if (total > 20000) {
  let discounted = applyDiscount(cart, 10);
  let discountedTotal = discounted.reduce(function(sum, item)
{
 return sum + item.discountedPrice;
},0);

console.log("Discount applied! New total: ₱" +
    discountedTotal.toFixed(2));
} else {
 console.log("Total: ₱" + total);
  }
}

checkout();

//14

function removeItembyName(productName) {
 for(let i = 0; i < product.length; i++) {
    if(products [i].name === productName) {
      cart.splice(i, 1);
         console.log(productName + " removed! ");
         return
    }
 }
console.log("Item not found in cart!");
}

//15

cart = [] // empty cart

addToCart("Laptop");
addToCart("Smart Watch");
addToCart("USB Cable");
addToCart("Headphones");

showCart();
checkout();

removeItembyName("USB Cable");
showCart();