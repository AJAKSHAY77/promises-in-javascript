// Sample list of books
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ];
  
  // Callback function to log titles in alphabetical order
  function logTitles(titles) {
    titles.sort(); // Sort titles alphabetically
    console.log("Titles in alphabetical order:");
    titles.forEach((title) => {
      console.log(title);
    });
  }
  
  // Main function
  function processBooks(bookList, callback) {
    const titles = bookList.map((book) => book.title); // Extract titles using map function
    callback(titles); // Call the callback function with the titles list
  }
  
  // Usage
  processBooks(books, logTitles);
  