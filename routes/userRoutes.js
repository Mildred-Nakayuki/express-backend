// import Router
const { Router } = require('express')

//import logic from controllers
const { helloWorld, getAllUsers, getUserById } = require('../controllers/userController')
const { createUser, loginUser } = require('../controllers/authController')

//create router instance
const router = Router()

//endpoint
router.get('/', helloWorld)

// GET /users
router.get('/users', getAllUsers)

// GET /users/:id
router.get('/users/:id', getUserById)

// POST /users/create
router.post('/users/create', createUser)

// POST /login
router.post('/login', loginUser)

module.exports = router