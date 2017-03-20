import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

export default function (app) {
  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cors())
}
