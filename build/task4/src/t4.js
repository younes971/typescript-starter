"use strict";
function createElectronicDevice() {
    const brandInput = prompt("Enter electronic device brand:") || "";
    const modelInput = prompt("Enter electronic device model:") || "";
    return {
        type: 'electronic',
        brand: brandInput,
        model: modelInput
    };
}
function createBook() {
    const titleInput = prompt("Enter book title:") || "";
    const authorInput = prompt("Enter book author:") || "";
    return {
        type: 'book',
        title: titleInput,
        author: authorInput
    };
}
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();
