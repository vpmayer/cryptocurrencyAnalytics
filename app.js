require('dotenv').config()
const slack = require('./slack')
const crypto = require('./crypto')
const analytics = require('./analytics/analytics');
const testes = require('./analytics/testes');

// The current date
const currentTime = new Date().toTimeString();

module.exports = async function app(){
 	let result;
	// console.log(await slack.sendMsg('current time1:' + currentTime))
	// console.log(await crypto.listAll())
	// console.log(await crypto.list(
	result = await analytics.injectData(await crypto.quotesLatest())
	// let result = await crypto.quotesLatest()
	//slack.sendMsg(await crypto.quotesLatest())

	await analytics.inversionTest('BTC');
	console.log(await testes.difference(process.env.BTCV, result[2].data['BTC'].quote.BRL.price))
	await analytics.inversionTest('ETH');
	console.log(await testes.difference(process.env.ETHV, result[2].data['ETH'].quote.BRL.price))
	// await analytics.inversionTest('XRP');
	// console.log(await testes.difference(process.env.XRPV, result[2].data['XRP'].quote.BRL.price))
	// await analytics.inversionTest();


	// console.log(result)
	return result
}