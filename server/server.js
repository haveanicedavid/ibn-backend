import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose, { Schema } from 'mongoose'
import config from '../config'

const app = express()

mongoose.connect(config.db)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// TODO move this out to models
const SnapSchema = new Schema({
  ltcRate: {
    type: Number
  }
  // created: {
  //   type: Date
  // }
})

const Snap = mongoose.model('Snap', SnapSchema)

app.get('/', (req, res) => {
  axios.get('https://btc-e.com/api/3/ticker/ltc_btc')
    .then((response) => {
      const rate = response.data.ltc_btc.buy // using BTC to buy ETH
      const ltcSnap = new Snap({ ltcRate: rate })
      console.log(rate)
      ltcSnap.save()
      res.send(JSON.stringify(rate))
    })
    .catch((error) => {
      console.log(error)
    })
})

app.get('/snaps', (req, res) => {
  Snap.find({}, (err, snaps) => {
    res.send(snaps)
  })
})


export default app
