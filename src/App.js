import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import HomePage from './HomePage.js'
import SearchPage from './SearchPage.js'
import './App.css'

class BooksApp extends React.Component {
    state = {}

    render() {
        return (
            <div className="app">
                <Route exact path="/" component={HomePage}/>
                <Route path="/search" component={SearchPage}/>
            </div>
            )
        }
    }

    export default BooksApp
