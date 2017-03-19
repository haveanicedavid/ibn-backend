import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.port || 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  axios.get('https://btc-e.com/api/3/ticker/ltc_btc')
    .then((response) => {
      console.log(response)
      res.send(response.data)
      // res.send('working')
    })
    .catch((error) => {
      console.log(error)
      res.send('fuck')
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
