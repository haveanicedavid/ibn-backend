import config from './config'
import server from './server/server.js'

server.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`)
})
