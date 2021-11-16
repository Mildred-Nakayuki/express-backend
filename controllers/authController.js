const users = require('../models/Users')
const bcrypt = require('bcryptjs')
const { registerCheck, loginCheck } = require('../helpers/validation')

const createUser = (req, res) => {
    //validate
    const { error } = registerCheck(req.body)
    if(error) return res.status(400).send({ error: error.details[0].message})


    const { username, email, password } = req.body

    //check if email exists and throw error
    const emailExists = users.find(user => user.email === email)
    if(emailExists) return res.status(400).send({ message: "email already exists"})

    //add new user to users array
    users.push({ id: users.length + 1, username, email, password: bcrypt.hashSync(password, 10)})
 
    //send a response
    res.status(201).send({ message: "user created successfully!"})
}

const loginUser = (req, res) => {
    //validate req.body
    const{error} = loginCheck(req.body)
    if (error) return res.status(400).send({error:error.details[0].message})
    
    //get email and password from the req object
    const { email, password } = req.body
    
    //find the user in users array
    const user = users.find(usr => usr.email == email)

    if(!user) return res.status(401).send({ message: "no such user with that email"})
    //compare passwordu
    const isValidPassword = bcrypt.compare(password, user.password)

    if(!isValidPassword) return res.status(400).send({ message: "Invalid password"})
    
    //respond
    res.status(200).send({ message: "Logged in as " + user.username})
    
}

module.exports = {
    createUser,
    loginUser
}