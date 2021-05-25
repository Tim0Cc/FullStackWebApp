const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// Read Authors
// GET All
router.get('/', (req, res) => {
  res.render('authors/index')
})

// GET One
// router.get('/', (req, res) => {
//   res.render('index')
// })

// Create new Author
// New Author Route
router.get('/new', (req, res) => {
  res.render('authors/new', { author: new Author() })
})
// Create Author Route
router.post('/', (req, res) => {
  res.send('Create')
})

// Update Author
// router.get('/', (req, res) => {
//   res.render('index')
// })

// Delete Author
// router.get('/', (req, res) => {
//   res.render('index')
// })

module.exports = router