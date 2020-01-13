import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
    const { bookName, genre, author, pubYear } = props.book;

    return (
        <div className="card text-center">
            <h2>{ bookName }</h2>
            <p>{ genre }</p>
            <p><strong>{ author }</strong></p>
            <p>{ pubYear }</p>            
        </div>
    );
};

BookItem.propTypes = {
    book: PropTypes.object.isRequired
}


export default BookItem;
