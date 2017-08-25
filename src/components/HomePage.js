import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksList from './BooksList.js';
import PropTypes from 'prop-types';

class HomePage extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <BooksList books={this.props.books} onChangeShelf={this.props.onChangeShelf} />

                <div className="open-search">
                    <Link to={'/search'}>Add a book</Link>
                </div>
            </div>
        )
    }
}

HomePage.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default HomePage
