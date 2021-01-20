const slack = require('./slack')
const crypto = require('./crypto')
const analytics = require('./analytics/analytics');

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

	await analytics.inversionTest();

	// console.log(result)
	return result
}