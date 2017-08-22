import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import HomePage from './components/HomePage.js'
import SearchPage from './components/SearchPage.js'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.getBooks()
    }

    getBooks = () => {
        BooksAPI.getAll().then((books) => this.setState({books}))
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <HomePage books={this.state.books} />
                )}/>
                <Route path="/search" component={SearchPage}/>
            </div>
        )
    }
}

export default BooksApp
