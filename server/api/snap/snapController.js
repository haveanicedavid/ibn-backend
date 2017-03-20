import Snap from './snapModel'
import axios from 'axios'

export default {
  createSnap (req, res, next) {
    axios
      .get('https://btc-e.com/api/3/ticker/ltc_btc')
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
  },
  getAllSnaps (req, res, next) {
    Snap.find({}).then((snaps) => {
      res.json(snaps)
    }, (err) => {
      console.log(err)
      // next(err)
    })
  }
}
