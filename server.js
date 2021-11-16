//1.Importing express using common JS 
const express = require('express')

//4. require dotenv
require('dotenv').config()
//2.creating an express instance
const app = express()

//5. defining port 
const PORT = process.env.PORT || 5000

//import routes
const userRoute = require('./routes/userRoutes')

//7. Middlewares
app.use(express.json())


//6. End points
app.use('/api/v1', userRoute)

//3. Start server
app.listen(PORT, () => console.log(`server running at ${PORT}`))

