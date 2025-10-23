let book = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
  isRead: true,
  bookInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`);
  },
  markAsRead() {
    this.isRead = true; 
    console.log(`Книга "${this.title}" тепер позначена як прочитана.`);
  }
};
book.bookInfo(); 
book.markAsRead(); 
book.bookInfo();


let library = [
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, isRead: true },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: false },
  { title: "1984", author: "George Orwell", year: 1949, isRead: true }
];
function displayLibrary() {
  console.log("📚 Бібліотека:");
  library.forEach(book => {
    console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"}`);
  });
}

displayLibrary();
library.push({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: false });
displayLibrary();
library.sort((a, b) => a.year - b.year);
console.log("Відсортовані книги за роком видання:", library);
let unreadBooks = library.filter(book => !book.isRead);
console.log("Непрочитані книги:", unreadBooks);
let tolkienBook = library.find(book => book.author === "J.R.R. Tolkien");
console.log("Книга Толкіна:", tolkienBook);

function addBookToLibrary() {
  let title = prompt("Введіть назву книги:");
  let author = prompt("Введіть автора книги:");
  let year = +prompt("Введіть рік видання книги:");
  let isRead = confirm("Чи прочитана книга?");

  library.push({ title, author, year, isRead });
  displayLibrary();
}
addBookToLibrary();

function calculateAverageYear() {
  let totalYear = library.reduce((acc, book) => acc + book.year, 0);
  let averageYear = totalYear / library.length;
  return averageYear;
}
let averageYear = calculateAverageYear();
console.log(`Середній рік видання всіх книг: ${averageYear}`);



