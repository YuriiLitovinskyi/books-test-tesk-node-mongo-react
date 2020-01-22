import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book,  onDeleteBook, handleBookDataToModal }) => {
   
    const { _id, bookName, genre, author, pubYear } = book; 
  
    return (
        <div className="card text-center">
            <h5><strong>{ bookName }</strong></h5>
            <p>{ genre }</p>
            <p><strong>{ author }</strong></p>
            <p>{ pubYear }</p>           
            <a href="#!">
                <i 
                    className="fa fa-trash delete-icon" 
                    aria-hidden="true"
                    onClick={() => onDeleteBook(_id)}
                >
                </i>
            </a>        
            <a href="#modify-book-modal" className="modal-trigger">
                <i 
                    className="fas fa-edit"
                    aria-hidden="true"
                    onClick={() => handleBookDataToModal(_id)}                                                                  
                >
                </i>
            </a>            
        </div>
    );
};

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
    onDeleteBook: PropTypes.func.isRequired,
    handleBookDataToModal: PropTypes.func.isRequired    
};


export default BookItem;
