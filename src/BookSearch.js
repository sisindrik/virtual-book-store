import { useState, useEffect } from 'react';

function BookSearch() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch initial book data
    fetchBooks();
    fetchBooks();
  }, []);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return { books, fetchBooks };
}

export default BookSearch;
