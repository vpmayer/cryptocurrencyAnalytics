const slack = require('./slack')
const crypto = require('./crypto')

// The current date
const currentTime = new Date().toTimeString();

module.exports = async function app(){
	// console.log(await slack.sendMsg('current time1:' + currentTime))

	// console.log(await crypto.listAll())
	// console.log(await crypto.list())
	// console.log(await crypto.quotesLatest())
	slack.sendMsg(await crypto.quotesLatest())
}