import React from 'react';
import BookView from './BookView.js';
import PropTypes from 'prop-types';

function BooksList (props) {
    return (
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {props.books.filter((book) => book.shelf === "currentlyReading").map((book) => <BookView key={book.id} book={book} onChangeShelf={props.onChangeShelf} />)}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {props.books.filter((book) => book.shelf === "wantToRead").map((book) => <BookView key={book.id} book={book} onChangeShelf={props.onChangeShelf} />)}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {props.books.filter((book) => book.shelf === "read").map((book) => <BookView key={book.id} book={book} onChangeShelf={props.onChangeShelf} />)}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

BooksList.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default BooksList
