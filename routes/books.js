const express = require('express')
const author = require('../models/author')
const router = express.Router()
const Book = require('../models/book')
const Author = require('../models/author')

// Read books
// GET All
router.get('/', async (req, res) => {
  res.send('All Books')
})

// GET One
// router.get('/', (req, res) => {
  //   res.render('index')
  // })
  
  // Create new Book
  // New Book Route 
router.get('/new', async (req, res) => {
  try {
    const authors = await Author.find({})
    const book = new Book()
    res.render('books/new', {
      authors: authors,
      book: book
    })
  } catch {
    res.redirect('/books')
  }
})
// Create Book Route
router.post('/', async (req, res) => {
  res.send('Create Book')
})

// Update Book
// router.get('/', (req, res) => {
//   res.render('index')
// })

// Delete Book
// router.get('/', (req, res) => {
//   res.render('index')
// })

module.exports = router