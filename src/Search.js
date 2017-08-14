import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends React.Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
        if (query) {
            BooksAPI.search(query, 50).then((books) => {
                if (Array.isArray(books))
                    this.setState({
                        books: books.map((book) => {
                            var arr = this.props.currentBooks.filter((b) => b.id === book.id)
                            if (arr.length > 0) {
                                return arr[0]
                            } else {
                                return book
                            }
                        })
                    })
            })
        }
    }

    updateBook = (e, f) => {
        this.props.updateBook(e, f)
        e.shelf = f.target.value
        this.setState({
            books: this.state.books.map((book) => {
                if(book.id === e.id) {
                    return e
                }
                return book
            })
        })
    }

    render() {
        const { query, books } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/* 
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                        
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((d, i) => (
                            <Book key={i} meta={d} onShelfChange={this.updateBook} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search