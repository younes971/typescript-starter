"use strict";
const cart = [];
while (true) {
    const itemName = prompt("Item name: ");
    if (itemName === "") {
        break;
    }
    const itemPrice = Number(prompt("Item price: "));
    const itemQuantity = Number(prompt("Item quantity: "));
    const newItem = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
}
const totalCost = cart
    .map(item => item.price * item.quantity)
    .reduce((sum, cost) => sum + cost, 0);
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
