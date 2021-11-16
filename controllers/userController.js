const users = require('../models/Users')

//testing
const helloWorld = (req, res) => {
    res.send({ msg: "Hello world"})
}

//get all users
const getAllUsers = (req, res) => {
    // res.status(200).json(users)
    //remove password from user object
    const newUsers = users.map(user => {
        return {
            id: user.id,
            username: user.username,
            email: user.email
        }
    })

    res.status(200).send(newUsers)

}

const getUserById = (req, res) => {
    //grab the userId from user object
    const userId = req.params.id
    //find the user in the users array
    const user = users.find(usr => usr.id == userId)
    //if no user found, send 404 user not found
    if(!user) return res.status(404).send({ message: " user not found"})

    //if user, send as res
    res.status(200).send({ id: user.id, email: user.email, username: user.username})
}


module.exports = {
    helloWorld,
    getAllUsers,
    getUserById,

}