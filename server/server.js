import express from 'express'
import mongoose from 'mongoose'
import config from '../config'
import setupMiddleware from './middleware/setupMiddleware.js'
import apiRoutes from './api/apiRoutes'

const app = express()

mongoose.connect(config.db)

// abstracted out middleware
setupMiddleware(app)

// API for routing
app.use('/api', apiRoutes)

// error handling
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send('Oops')
  }
})

export default app
