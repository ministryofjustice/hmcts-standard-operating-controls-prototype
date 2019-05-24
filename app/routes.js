const express = require('express')
const router = express.Router()
const utils = require('./utils')

router.get('/search', function (req, res) {


  res.render('search',
    {
      proceedings: utils.getProceedings()
    })

})

router.get('/search_select', function (req, res) {


  res.render('search_select',
    {
      proceedings: utils.getProceedings()
    })

})

router.get('/search_w_codes', function (req, res) {

res.render('search',
  {
    proceedings: utils.getProceedings()
  })

})

router.get('/search_select_w_codes', function (req, res) {

res.render('search_select',
  {
    proceedings: utils.getProceedings()
  })

})

router.get('/', (req, res) => {
  res.redirect('/landing')
})

// Add your routes here - above the module.exports line
router.post('/om-email-address', function (req, res) {
Object.assign(req.session.data,req.body)
console.log(req.session.data)
res.redirect('/admin_legal')
})

router.post('/admin_legal', function (req, res) {
Object.assign(req.session.data,req.body)
console.log(req.session.data)
res.redirect('/dm_details')
})

router.post('/dm-email-address-1', function (req, res) {
Object.assign(req.session.data,req.body)
console.log(req.session.data)
res.redirect('/confirm_details')
})

router.post('/dm-email-address-2', function (req, res) {
Object.assign(req.session.data,req.body)
console.log(req.session.data)
res.redirect('/confirm_details')
})

router.post('/soc-type', function (req, res) {
Object.assign(req.session.data,req.body)
console.log(req.session.data)
res.redirect('/search')
})

router.post('/soc_responsibilities', function (req, res) {
Object.assign(req.session.data,req.body)
console.log(req.session.data)
res.redirect('/task_list')
})

router.post('/checks_status', function (req, res) {
Object.assign(req.session.data,req.body)
console.log(req.session.data)
res.redirect('/task_list')
})

router.post('/issues_list', function (req, res) {
Object.assign(req.session.data,req.body)
console.log(req.session.data)
res.redirect('/task_list')
})

router.post('/report_issue_detail', function (req, res) {
Object.assign(req.session.data,req.body)
console.log(req.session.data)
res.redirect('/issues_list_w_updates')
})

router.post('/issues_select_activities', function (req, res) {
Object.assign(req.session.data,req.body)
console.log(req.session.data)
res.redirect('/report_issue_detail')
})

module.exports = router
