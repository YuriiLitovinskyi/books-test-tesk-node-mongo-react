import React, { useState } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddBtnModal = ({ addBook }) => {  
    const [bookName, setBookName] = useState('');
    const [genre, setGenre] = useState('');
    const [author, setAuthor] = useState('');
    const [pubYear, setPubYear] = useState('');

    const onSubmit = () => {
        if (bookName === '' || genre === '' || author === '' || pubYear === ''){
            M.toast({ html: 'Please fill all fields!' });
        } else {
            const newBook = {
                bookName,
                genre,
                author,
                pubYear
            };

            addBook(newBook);

            //Clear fields
            setBookName('');
            setGenre('');
            setAuthor('');
            setPubYear('');
        }
    }

    return (
        <div id="add-book-modal" className="modal">
            <div className="modal-content">
                <h4>Enter New Book</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="bookName" 
                            value={bookName} 
                            placeholder="Book Name"
                            onChange={(e) => setBookName(e.target.value)}
                        />                        
                    </div>
                </div> 
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="genre" 
                            value={genre} 
                            placeholder="Genre"
                            onChange={(e) => setGenre(e.target.value)}
                        />                        
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="author" 
                            value={author} 
                            placeholder="Author"
                            onChange={(e) => setAuthor(e.target.value)}
                        />                        
                    </div>
                </div>    
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="number" 
                            name="pubYear" 
                            value={pubYear} 
                            placeholder="Year Published"
                            onChange={(e) => setPubYear(e.target.value)}
                        />                        
                    </div>
                </div>       
                
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-green btn">
                    Enter
                </a>
            </div>
        </div>
    );
};

AddBtnModal.propTypes = {
    addBook: PropTypes.func.isRequired
};

export default AddBtnModal;
