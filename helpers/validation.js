const joi = require('joi')

const registerCheck = (data) => {
    const schema = joi.object({
        username: joi.string().required(),
        password: joi.string().required(),
        email: joi.string().email().required()
    })

    return schema.validate(data)
}

const loginCheck = (data) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    })

    return schema.validate(data)

}

module.exports = {
    registerCheck,
    loginCheck
}