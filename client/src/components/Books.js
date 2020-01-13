import React from 'react';
import BookItem from './BookItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const Books = ({books, loading}) => {
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={bookStyle}>
                {books.map(book => (
                    <BookItem key={book._id} book={book} />
                ))}
                
            </div>
        )
    }   
};

Books.propTypes = {
    books: PropTypes.array.isRequired   
};

const bookStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Books;
