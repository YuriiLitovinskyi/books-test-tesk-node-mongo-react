import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Books from './Books';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadBooks();
    //eslint-disable-next-line
}, []);

  const loadBooks = async () => {
    setLoading(true);

    const res = await axios.get('/books');

    setBooks(res.data);
    //console.log(res.data);    
    setLoading(false);  
  }

    return (
        <div className="container">
            <Books 
            loading={loading} 
            books={books} 
          />
        </div>
    )
}

export default Home;
