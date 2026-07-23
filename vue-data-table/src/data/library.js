import { ref } from "vue";

export const libraryColumns = [
  { label: "Book", key: "book" },
  { label: "Author", key: "author" },
  { label: "Genre", key: "genre" },
  { label: "Year", key: "year" },
  { label: "Status", key: "status" }
];

export const libraryData = ref([
  {
    id: 1,
    book: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    year: 2008,
    status: "Available"
  },
  {
    id: 2,
    book: "Atomic Habits",
    author: "James Clear",
    genre: "Self Help",
    year: 2018,
    status: "Issued"
  },
  {
    id: 3,
    book: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    year: 1999,
    status: "Available"
  },
  {
    id: 4,
    book: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    year: 2016,
    status: "Issued"
  },
  {
    id: 5,
    book: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    year: 1988,
    status: "Available"
  },
  {
    id: 6,
    book: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    year: 1997,
    status: "Available"
  },
  {
    id: 7,
    book: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Finance",
    year: 1937,
    status: "Issued"
  },
  {
    id: 8,
    book: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    genre: "Computer Science",
    year: 2009,
    status: "Available"
  },
  {
    id: 9,
    book: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    genre: "Programming",
    year: 2008,
    status: "Available"
  },
  {
    id: 10,
    book: "You Don't Know JS",
    author: "Kyle Simpson",
    genre: "Programming",
    year: 2015,
    status: "Issued"
  },
  {
    id: 11,
    book: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Finance",
    year: 2020,
    status: "Available"
  },
  {
    id: 12,
    book: "Harry Potter",
    author: "J.K. Rowling",
    genre: "Fantasy",
    year: 1997,
    status: "Issued"
  },
  {
    id: 13,
    book: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1937,
    status: "Available"
  },
  {
    id: 14,
    book: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    year: 2011,
    status: "Available"
  },
  {
    id: 15,
    book: "Zero to One",
    author: "Peter Thiel",
    genre: "Business",
    year: 2014,
    status: "Issued"
  }
]);