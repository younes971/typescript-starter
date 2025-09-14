type BookProdukt = {
  title: string;
  author: string;
  publicationYear: number;
};

function promptForBook(): Book {
  const bookTitle = (prompt("Enter book title:") || "") as string;
  const bookAuthor = (prompt("Enter book author:") || "") as string;
  const bookPublicationYearInput = (prompt("Enter publication year:") || "0") as string;
  const bookPublicationYear = parseInt(bookPublicationYearInput) as number;

  const book: Book = {
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
