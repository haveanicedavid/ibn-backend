import Snap from './snapModel'
import axios from 'axios'
// import { fetchBTCE } from '../../../utilities/rateFetch'
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
        BTCERates: {
          ltcRate: btceLtc.data.ltc_btc.last,
          ethRate: btceEth.data.eth_btc.last,
          dshRate: btceDsh.data.dsh_btc.last
        },
        PoloniexRates: {
          ltcRate: Number(polo.data.BTC_LTC.last),
          ethRate: Number(polo.data.BTC_ETH.last),
          dshRate: Number(polo.data.BTC_DASH.last)
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
  getAllSnaps (req, res, next) {
    Snap.find({}).then((snaps) => {
      res.json(snaps)
    }, (err) => {
      next(err)
    })
  }
}
