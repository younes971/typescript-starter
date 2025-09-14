"use strict";
function promptForBook() {
    const bookTitle = (prompt("Enter book title:") || "");
    const bookAuthor = (prompt("Enter book author:") || "");
    const bookPublicationYearInput = (prompt("Enter publication year:") || "0");
    const bookPublicationYear = parseInt(bookPublicationYearInput);
    const book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: bookPublicationYear,
    };
    return book;
}
const bookDetails = promptForBook();
console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);
