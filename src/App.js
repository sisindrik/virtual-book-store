import React, { useState } from 'react';
import './App.css';
import BookSearch from './BookSearch';
import BookCard from './BookCard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const { books, fetchBooks } = BookSearch();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      fetchBooks(searchQuery);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Online Bookstore</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <main>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </main>
    </div>
  );
}

export default App;

