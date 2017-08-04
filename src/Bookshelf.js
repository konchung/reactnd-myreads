import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }

    render() {
        const { title, books } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((d, i) => (
                            <Book key={i} meta={d} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf