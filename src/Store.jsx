import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class Store extends React.Component {
    getBooksByShelf(books, c) {
        return books.filter((b) => b.shelf === c)
    }

    render() {
        const { books, updateBook } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>Konway's Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title="Currently Reading" books={this.getBooksByShelf(books, "currentlyReading")} onShelfChange={updateBook} />
                        <Bookshelf title="Want to Read" books={this.getBooksByShelf(books, "wantToRead")} onShelfChange={updateBook} />
                        <Bookshelf title="Read" books={this.getBooksByShelf(books, "read")} onShelfChange={updateBook} />
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