import express from 'express'
import mongoose from 'mongoose'
import config from '../config'
import setupMiddleware from './middleware/setupMiddleware.js'
import api from './api'

const app = express()

mongoose.connect(config.db)
setupMiddleware(app)

app.use('/api', api)

export default app
