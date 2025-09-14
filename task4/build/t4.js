"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createElectronicDevice() {
    var brandInput = prompt("Enter electronic device brand:") || "";
    var modelInput = prompt("Enter electronic device model:") || "";
    return {
        type: 'electronic',
        brand: brandInput,
        model: modelInput
    };
}
function createBook() {
    var titleInput = prompt("Enter book title:") || "";
    var authorInput = prompt("Enter book author:") || "";
    return {
        type: 'book',
        title: titleInput,
        author: authorInput
    };
}
var electronicProduct = createElectronicDevice();
var bookProduct = createBook();
