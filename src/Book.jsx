import React from 'react'
import PropTypes from 'prop-types'
import camelCase from 'camelcase'

const shelves = ['Currently Reading', 'Want to Read', 'Read', 'None']

class Book extends React.Component {
    static propTypes = {
        meta: PropTypes.object,
    }

    render() {
        const { meta, onShelfChange } = this.props

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + meta.imageLinks.thumbnail + '")' }}></div>
                        <div className="book-shelf-changer">
                            <select value={meta.shelf || 'none'} onChange={onShelfChange.bind(this, meta)}>
                                <option value="label" disabled>Move to...</option>
                                {shelves.map((d) => (
                                    <option key={Math.random()} value={camelCase(d)}>{d}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{meta.title}</div>
                    <div className="book-authors">
                        {meta.authors}
                    </div>
                </div>
            </li>
        )
    }
}

export default Book