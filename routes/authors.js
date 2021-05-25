const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// Read Authors
// GET All
router.get('/', async (req, res) => {
  let searchOptions = {}
  if (req.query.name != null && req.query.name !== '') {
    searchOptions.name = new RegExp(req.query.name, 'i')  // Case-insensitive
  }
  try {
    const authors = await Author.find(searchOptions)
    res.render('authors/index', { 
      authors: authors,
      searchOptions: req.query 
    })
  } catch {
    res.redirect('/')
  }
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
router.post('/', async (req, res) => {
  // res.send(req.body.name) -> only sending for testing purpose
  const author = new Author({
    name: req.body.name
  })
  try {
    const newAuthor = await author.save()
    // res.redirect(`authors/${newAuthor.id}`)
    res.redirect(`authors`)
  } catch {
    res.render('authors/new', {
      author: author,
      errorMessage: 'Error creating Author'
    })
  }
  // author.save((err, newAuthor) => {
  //   if (err) {
  //     res.render('authors/new', {
  //       author: author,
  //       errorMessage: 'Error creating Author'
  //     })
  //   } else {
  //     // res.redirect(`authors/${newAuthor.id}`)
  //     res.redirect(`authors`)
  //   }
  // })
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