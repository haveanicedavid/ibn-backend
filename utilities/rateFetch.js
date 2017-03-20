import axios from 'axios'
// import Promise from 'bluebird'

export function fetchBTCELitecoin () {
  return axios.get('https://btc-e.com/api/3/ticker/ltc_btc')
}
export function fetchBTCEDash () {
  return axios.get('https://btc-e.com/api/3/ticker/dsh_btc')
}
export function fetchBTCEEthereum () {
  return axios.get('https://btc-e.com/api/3/ticker/eth_btc')
}

export function fetchPoloniex () {
  return axios.get('https://poloniex.com/public?command=returnTicker')
}

// NOTE coincap API keeps giving issue.
// There is no direct place for exchange rate. I could calculate it manually,
// however the data for ETH an DSH is returning an empty obj

// export function fetchCoinCapBTC () {
//   return axios.get('http://coincap.io/page/BTC')
// }
//
// export function fetchCoinCapDSH () {
//   return axios.get('http://coincap.io/page/DSH')
// }
//
// export function fetchCoinCapETH () {
//   return axios.get('http://coincap.io/page/ETH')
// }
