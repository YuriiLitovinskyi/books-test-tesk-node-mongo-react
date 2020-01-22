import React from 'react';

const AddBookBtn = () => {
    return (
        <div className="fixed-action-btn">
            <a href="#add-book-modal" className="btn-floating btn-large blue darken-2 modal-trigger">
                <i className="fas fa-plus"></i>
            </a>                     
        </div>
    );
};

export default AddBookBtn;

