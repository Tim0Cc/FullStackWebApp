const express = require('express')
const router = express.Router()
const Book = require('../models/book')

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
router.get('/new', (req, res) => {
  res.send('New Book')
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