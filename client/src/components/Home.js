import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Books from './Books';
import M from 'materialize-css/dist/js/materialize.min.js';
import AddBtnModal from './AddBtnModal';
import ModifyBookModal from './ModifyBookModal';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [bookToModify, setBookToModify] = useState({});

  useEffect(() => {
    loadBooks();
    M.AutoInit();
    //eslint-disable-next-line
}, []);

  const loadBooks = async () => {
    setLoading(true);
    const res = await axios.get('/books');
    setBooks(res.data);      
    setLoading(false);  
  };

  const onDeleteBook = async (id) => {
    try {     
      const res = await axios.delete(`/${id}`);     
      M.toast({ html: `${res.data.msg}` });
      loadBooks();
    } catch (error) {
      console.error(error);
    }   
  };

  const addBook = async (newBook) => {
    try {
      const res = await axios.post('/addBook', newBook);      
      M.toast({ html: `Book ${res.data.bookName} was added to database!` });     
      loadBooks();     
    } catch (error) {
      console.error(error);
    }
  };

  const modifyBook = async (book) => {
    const modifiedBook = {
      bookName: book.bookName,
      genre: book.genre,
      author: book.author,
      pubYear: book.pubYear
    };

    try {
      const res = await axios.put(`/${book._id}`, modifiedBook, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      M.toast({ html: `${res.data.msg}` });    
      loadBooks(); 
    } catch (error) {
      console.error(error);
    }
  };

  // Find and set a book to modify
  const handleBookDataToModal = (id) => {
    const bookToModify = books.find(book => book._id === id);  
    setBookToModify(bookToModify);   
  };

    return (
        <div className="container">
            <Books 
              loading={loading} 
              books={books} 
              onDeleteBook={onDeleteBook}               
              handleBookDataToModal={handleBookDataToModal}              
            />
            <AddBtnModal
              addBook={addBook}              
            />
            <ModifyBookModal 
                modifyBook={modifyBook} 
                bookToModify={bookToModify}
            />                      
        </div>
    );
};

export default Home;
