const router = require('express').Router()
const { GET } = require('./controller.js')

router.route('/income')
        .get( GET )


module.exports = router       