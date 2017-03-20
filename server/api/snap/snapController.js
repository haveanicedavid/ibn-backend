import Snap from './snapModel'
import axios from 'axios'

function fetchBTCELitecoin () {
  return axios.get('https://btc-e.com/api/3/ticker/ltc_btc')
}
function fetchBTCEDash () {
  return axios.get('https://btc-e.com/api/3/ticker/dsh_btc')
}
function fetchBTCEEthereum () {
  return axios.get('https://btc-e.com/api/3/ticker/eth_btc')
}
export default {
  createSnap (req, res, next) {
    axios.all([
      fetchBTCELitecoin(),
      fetchBTCEEthereum(),
      fetchBTCEDash()
    ]).then(axios.spread((lte, eth, dsh) => {
      console.log('lte', lte.data.ltc_btc)
      console.log('eth', eth.data.eth_btc)
      console.log('dsh', dsh.data.dsh_btc)
      // const ltcRate = response.data.ltc_btc.buy
      // const Rate = response.data.ltc_btc.buy
      // const ltcSnap = new Snap({ ltcRate: rate })
      // console.log(rate)
      // ltcSnap.save()
      // res.send(JSON.stringify(rate))
    }))
    .catch((err) => {
      next(err)
    })
  },
  // createSnap (req, res, next) {
  //   axios
  //     .get('https://btc-e.com/api/3/ticker/ltc_btc')
  //     .then((response) => {
  //       const rate = response.data.ltc_btc.buy // using BTC to buy ETH
  //       const ltcSnap = new Snap({ ltcRate: rate })
  //       console.log(rate)
  //       ltcSnap.save()
  //       res.send(JSON.stringify(rate))
  //     })
  //     .catch((err) => {
  //       next(err)
  //     })
  // },
  getAllSnaps (req, res, next) {
    Snap.find({}).then((snaps) => {
      res.json(snaps)
    }, (err) => {
      next(err)
    })
  }
}
