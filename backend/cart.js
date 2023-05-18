// Get the button that adds items to the cart
var addToCartBtn = document.getElementById("cart");

// Add a click event listener to the button
addToCartBtn.addEventListener("click", function() {
  // Get the item name and price from the page
  var itemName = document.getElementById("item-name").value;
  var itemPrice = document.getElementById("item-price").value;

  // Create an object to represent the item
  var item = { name: itemName, price: itemPrice };

  // Add the item to the cart
  addItemToCart(item);
});

// Function to add an item to the cart
function addItemToCart(item) {
  // Check if the cart already exists in local storage
  if (localStorage.getItem("cart") === null) {
    // If the cart doesn't exist, create it as an empty array
    var cart = [];
    // Add the item to the cart
    cart.push(item);
    // Save the cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    // If the cart already exists, get it from local storage
    var cart = JSON.parse(localStorage.getItem("cart"));
    // Add the item to the cart
    cart.push(item);
    // Save the cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }
} 
