import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Search from './Search'
import Store from './Store'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/search" component={Search} />
        <Route exact path="/" component={Store} />
      </div>
    )
  }
}

export default BooksApp
