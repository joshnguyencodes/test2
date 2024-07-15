require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const runRoute = require('./routes/run')

// create express app
const app = express()

// middleware
app.use(express.json()) // parse json data to update/input runs

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
}) // log the request path and method to terminal

// route for runs
app.use('/api/runs', runRoute)

// connect to mongodb and start server
mongoose.connect(process.env.DB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to db and server is listening on port', process.env.PORT) 
       })
    })



