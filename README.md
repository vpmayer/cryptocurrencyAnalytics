
# Cryptocurrency Analytics <img src="./btcImg512.png" width="80"> 

This project use api to track tendency of cryptocurrency and report by Slack

## You will need these API:
1. [CoinMarketCap Api](https://pro.coinmarketcap.com/)
2. [Slack](https://slack.com/)

## Slack Iinterface

### sendMsg(msg, channel)
'msg' -> mensage will be post to slack
'channel' -> channel where the mensage will be send
return status of transmissition

## Crypto Interface

### listAll()
retrun a list 100 firsts cryptocurency on [https://coinmarketcap.com/](https://coinmarketcap.com/)

### listInfo(symbol)
'symbol' -> symbolic name of cryptocureency Ex.: BTC, ETH, XRP ....
Return information about one or more cryptocurrencty

### quotesLatest(symbol)
'symbol' -> symbolic name of cryptocureency Ex.: BTC, ETH, XRP ....
Return the value of and another information about the cryptocurrency
