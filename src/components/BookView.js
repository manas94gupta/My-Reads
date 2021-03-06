import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookView extends Component {
    constructor(props) {
        super(props)

        this.changeShelf = this.changeShelf.bind(this)
    }

    changeShelf(e) {
        this.props.onChangeShelf(this.props.book, e.target.value)
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                            <select value={this.props.book.shelf ? this.props.book.shelf : "none"} onChange={this.changeShelf}>
                                <option value="" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors && this.props.book.authors.map((author) => author).join(', ')}</div>
                </div>
            </li>
        )
    }
}

BookView.propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default BookView
