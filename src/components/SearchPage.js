import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookView from './BookView.js'

class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            searchValue: ''
        }

        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e) {
        this.setState({searchValue: e.target.value})
        BooksAPI.search(e.target.value, 10).then((books) => books && books.length > 0 ? this.setState({books}) : this.setState({books: []}))
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to={'/'} className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" value={this.state.searchValue} onChange={this.handleSearch} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book) => <BookView key={book.id} book={book} onChangeShelf={this.props.onChangeShelf} />)}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage
