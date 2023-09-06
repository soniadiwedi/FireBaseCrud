import {db} from "../firebaseConfig"
import {
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  addDoc, // Add this import
} from "firebase/firestore";

const bookCollectionRef = collection(db, "books");

// Function to add a new book
const addBook = (newBook) => {
  return addDoc(bookCollectionRef, newBook);
};

// Function to update an existing book
const updateBook = (id, updateBook) => {
  const bookDoc = doc(db, "books", id);
  return updateDoc(bookDoc, updateBook);
};

// Function to delete a book by ID
const deleteBook = (id) => {
  const bookDoc = doc(db, "books", id);
  return deleteDoc(bookDoc);
};

// Function to get all books
const getAllBooks = () => {
  return getDocs(bookCollectionRef);
};

// Function to get a book by ID
const getBook = (id) => {
  const bookDoc = doc(db, "books", id);
  return getDoc(bookDoc);
};

export { addBook, updateBook, deleteBook, getAllBooks, getBook };
