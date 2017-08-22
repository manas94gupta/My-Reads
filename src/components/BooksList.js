import React, { Component } from 'react';
import BookView from './BookView.js'

class BooksList extends Component {
    render() {
        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books.filter((book) => book.shelf === "currentlyReading").map((book) => <BookView key={book.id} book={book} />)}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books.filter((book) => book.shelf === "wantToRead").map((book) => <BookView key={book.id} book={book} />)}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books.filter((book) => book.shelf === "read").map((book) => <BookView key={book.id} book={book} />)}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksList
