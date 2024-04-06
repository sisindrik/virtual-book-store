import React from 'react';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.authors?.join(', ')}</p>
      <div className="buttons">
        <a href={book.volumeInfo.previewLink} target="_blank">
          Read Now
        </a>
        <a href={book.volumeInfo.infoLink} target="_blank">
          More Info
        </a>
      </div>
    </div>
  );
}

export default BookCard;
