import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Search from './Search'
import Store from './Store'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBook = (e, f) => {
    BooksAPI.update(e, f.target.value)
    this.getAllBooks()
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/search" render={() => (
            <Search currentBooks={this.state.books} updateBook={this.updateBook} />
          )} />
          <Route exact path="/" render={() => (
            <Store books={this.state.books} updateBook={this.updateBook} />
          )} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
