const router = require('express').Router()
const authControl = require('./controllers/authControl')
const userControl = require('./controllers/userControl')
const denunciasControl = require('./controllers/denunciasControl')

router.post('/register', userControl.createUser)
router.post('/login', authControl.loginUser)
router.post('/denuncia', denunciasControl.createDenuncia)
router.get('/denuncia', denunciasControl.getCredenciais)

module.exports = router