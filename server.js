const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

const mongoose = require("mongoose");

//Connect Database
connectDB();

const Book = require("./model/books");

//Init Middleware
app.use(express.json({ extended: false }));

//GET
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find({}).sort({ date: -1 });
        res.json(books);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//POST
app.post('/addBook', async (req, res) => {
    const { bookName, genre, author, pubYear } = req.body;

    try {
        const newBook = new Book({
            bookName,
            genre,
            author,
            pubYear
        });

        const book = await newBook.save();

        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//DELETE
app.delete('/:id', async (req, res) => {
    const bookToDelete = req.params.id;

    try {
        await Book.findOneAndRemove({_id: bookToDelete});
        res.status(200).json({ msg: "Book was deleted from database succesfully!" });        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
});

//PUT
app.put('/:id', async(req, res) => {
    const { bookName, genre, author, pubYear } = req.body;

    try {
        await Book.updateOne(
            {_id: req.params.id},
            {$set:
                {
                    bookName,
                    genre,
                    author,
                    pubYear
                }
            },
            {"upsert": false}
        );
        res.status(200).json({ msg: "Book was updated succesfully!" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));