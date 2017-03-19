import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const port = process.env.port || 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  axios.get('https://btc-e.com/api/3/ticker/ltc_btc')
    .then((response) => {
      console.log(response)
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
