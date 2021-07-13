const router = require('express').Router()
const { GET } = require('./controller.js')

router.route('/balance')
        .get( GET )


module.exports = router       