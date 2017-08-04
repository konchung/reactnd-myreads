import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class Store extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    getBooksByShelf(c) {
        return this.state.books.filter((b) => b.shelf === c)
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title="Currently Reading" books={this.getBooksByShelf("currentlyReading")} />
                        <Bookshelf title="Want to Read" books={this.getBooksByShelf("wantToRead")} />
                        <Bookshelf title="Read" books={this.getBooksByShelf("read")} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">About</Link>
                </div>
            </div>
        )
    }
}

export default Store