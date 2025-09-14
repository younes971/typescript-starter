function promptForBook() {
    var bookTitle = prompt("Enter book title:") || "";
    var bookAuthor = prompt("Enter book author:") || "";
    var bookPublicationYearInput = prompt("Enter publication year:") || "";
    var bookPublicationYear = parseInt(bookPublicationYearInput);
    var book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: bookPublicationYear,
    };
    return book;
}
var bookDetails = promptForBook();
console.log("Book Details:");
console.log("Title: ".concat(bookDetails.title));
console.log("Author: ".concat(bookDetails.author));
console.log("Publication Year: ".concat(bookDetails.publicationYear));
