import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import HomePage from './components/HomePage.js'
import SearchPage from './components/SearchPage.js'
import './App.css'

class BooksApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }

        this.onChangeShelf = this.onChangeShelf.bind(this)
    }

    componentDidMount() {
        this.getBooks()
    }

    getBooks() {
        BooksAPI.getAll().then((books) => this.setState({books}))
    }

    onChangeShelf(book, shelf) {
        BooksAPI.update(book, shelf).then(() => this.getBooks())
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <HomePage books={this.state.books} onChangeShelf={this.onChangeShelf} />
                )}/>
                <Route path="/search" render={() => (
                    <SearchPage currentBooks={this.state.books} onChangeShelf={this.onChangeShelf} />
                )}/>
            </div>
        )
    }
}

export default BooksApp
