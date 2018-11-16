const express = require('express')
const bodyParse = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParse.json())

app.use('/interfaces', require('./routes/interfaces'))

app.use(defaultRoute = (req, res, next) => next({status: 404, message: 'Route not found.'}))

app.use(errorHandler = (req, res, next) => {
    const errorMessage = {}

    if(process.env.NODE_ENV !== 'production' && err.stack)
        errorMessage.stack = err.stack

    errorMessage.status = err.status || 500
    errorMessage.message = err.message ||'Internal Server Error'

    res.status(errorMessage.status).send(errorMessage.message)
})


const port = process.env.PORT || 3000

app.listen(port, portListener = () => {
    console.log(`Listening on port ${port}`)
})