import { ref } from "vue";

export const libraryColumns = [
  { label: "Book", key: "book" },
  { label: "Author", key: "author" },
  { label: "Genre", key: "genre" },
  { label: "Year", key: "year" },
  { label: "Status", key: "status" }
];

export const libraryData = ref([
  { book: "Clean Code", author: "Robert C. Martin", genre: "Programming", year: 2008, status: "Available" },
  { book: "Atomic Habits", author: "James Clear", genre: "Self Help", year: 2018, status: "Issued" },
  { book: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", year: 1988, status: "Available" },
  { book: "Rich Dad Poor Dad", author: "Robert Kiyosaki", genre: "Finance", year: 1997, status: "Issued" },
  { book: "Deep Work", author: "Cal Newport", genre: "Productivity", year: 2016, status: "Available" },
  { book: "Think and Grow Rich", author: "Napoleon Hill", genre: "Business", year: 1937, status: "Available" },
  { book: "Zero to One", author: "Peter Thiel", genre: "Startup", year: 2014, status: "Issued" },
  { book: "Ikigai", author: "Hector Garcia", genre: "Lifestyle", year: 2016, status: "Available" },
  { book: "The Pragmatic Programmer", author: "Andrew Hunt", genre: "Programming", year: 1999, status: "Issued" },
  { book: "1984", author: "George Orwell", genre: "Novel", year: 1949, status: "Available" },
  { book: "Sapiens", author: "Yuval Noah Harari", genre: "History", year: 2011, status: "Available" },
  { book: "The Psychology of Money", author: "Morgan Housel", genre: "Finance", year: 2020, status: "Issued" },
  { book: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", year: 1997, status: "Available" },
  { book: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937, status: "Issued" },
  { book: "The Lean Startup", author: "Eric Ries", genre: "Business", year: 2011, status: "Available" }
]);