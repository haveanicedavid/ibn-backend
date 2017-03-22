import Snap from './snapModel'
import axios from 'axios'
import {
  fetchBTCELitecoin,
  fetchBTCEDash,
  fetchBTCEEthereum,
  fetchPoloniex
} from '../../../utilities/rateFetch'

export default {
  createSnap (req, res, next) {
    axios.all([
      fetchBTCELitecoin(),
      fetchBTCEEthereum(),
      fetchBTCEDash(),
      fetchPoloniex()
    ]).then(axios.spread((btceLtc, btceEth, btceDsh, polo) => {
      Snap.create({
        ltcRates: {
          btce: btceLtc.data.ltc_btc.last,
          poloniex: Number(polo.data.BTC_LTC.last)
        },
        ethRates: {
          btce: btceEth.data.eth_btc.last,
          poloniex: Number(polo.data.BTC_ETH.last)
        },
        dshRates: {
          btce: btceDsh.data.dsh_btc.last,
          poloniex: Number(polo.data.BTC_DASH.last)
        },
        createdAt: new Date()
      }, (err, snap) => {
        if (err) {
          next(err)
        } else {
          res.send(snap)
        }
      })
    }))
    .catch((err) => {
      next(err)
    })
  },
  getRecentSnaps (req, res, next) {
    Snap.find({}).sort('-createdAt').limit(10).then((snaps) => {
      res.json(snaps)
    }, (err) => {
      next(err)
    })
  }
}
