var cart = [];
while (true) {
    var itemName = prompt("Item name: ");
    if (itemName === "") {
        break;
    }
    var itemPrice = Number(prompt("Item price: "));
    var itemQuantity = Number(prompt("Item quantity: "));
    var newItem = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
}
var totalCost = cart
    .map(function (item) { return item.price * item.quantity; })
    .reduce(function (sum, cost) { return sum + cost; }, 0);
console.log("Total cost of the shopping cart: $".concat(totalCost.toFixed(2)));
