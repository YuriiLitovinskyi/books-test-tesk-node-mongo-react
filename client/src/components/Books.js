import React from 'react';
import BookItem from './BookItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import AddBookBtn from './AddBookBtn';

const Books = ({ books, loading, onDeleteBook, handleBookDataToModal }) => {
   
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={bookStyle}>
                {books.map((book) => (
                    <BookItem                       
                        key={book._id} 
                        book={book} 
                        onDeleteBook={onDeleteBook}                       
                        handleBookDataToModal={handleBookDataToModal}                        
                    />
                ))}
                <AddBookBtn />                 
            </div>
        )
    }   
};

Books.propTypes = {
    books: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onDeleteBook: PropTypes.func.isRequired,
    handleBookDataToModal: PropTypes.func.isRequired       
};

const bookStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Books;
