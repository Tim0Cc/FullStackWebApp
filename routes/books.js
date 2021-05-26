const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const Book = require('../models/book')
const uploadPath = path.join('public', Book.coverImageBasePath)
const imageMimeTypes = ['images/jpeg', 'images/png', 'images/gif']
const Author = require('../models/author')
const upload = multer({
  dest: uploadPath,
  fileFilter: (req, file, callback) => {
    callback(null,)
  }
})

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
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    publishDate: new Date(req.body.publishDate),
    pageCount: req.body.pageCount,
    description: req.body.description,
  })
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