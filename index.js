import config from './config'
import server from './server/server'

server.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`)
})
