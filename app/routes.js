const express = require('express')
const router = express.Router()
const utils = require('./utils')



router.get('/search', function (req, res) {

  res.render('search',
    {
      proceedings: utils.getProceedings()
    })

})

// Add your routes here - above the module.exports line

module.exports = router
