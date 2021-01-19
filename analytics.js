const slack = require('./slack');

var data = [];

module.exports = {

	injectData: async (myData)=>{
		if(data[0]===undefined){
			data[0] = myData;
		}else{
			data[0]= data[1]
		}
		if(data[1]===undefined){
			data[1] = myData;
		}else{
			data[1] = data[2]
		}
		
		data[2]= myData

		return data;
	},

	inversionTest: async (currency='BTC',convert='BRL')=>{
		let table = [];
		let sigTable = [];

		for (let i = 0; i < data.length; i++) {

			let filter = {
				price: data[i].data[currency].quote[convert].price,
				volume_24h: data[i].data[currency].quote[convert].volume_24h,
				percent_change_1h: data[i].data[currency].quote[convert].percent_change_1h,
				percent_change_24h: data[i].data[currency].quote[convert].percent_change_24h,
				percent_change_7d: data[i].data[currency].quote[convert].percent_change_7d,
				last_updated: data[i].data[currency].quote[convert].last_updated
			}
			mySig = {
				percent_change_1h: data[i].data[currency].quote[convert].percent_change_1h>=0?'rising':'falling',
				percent_change_24h: data[i].data[currency].quote[convert].percent_change_24h>=0?'rising':'falling',
				percent_change_7d: data[i].data[currency].quote[convert].percent_change_7d>=0?'rising':'falling',
				last_updated: data[i].data[currency].quote[convert].last_updated
			}

			table.push(filter)
			sigTable.push(mySig)

			// let h1 = mySig.map((sig) =>{ return sig.percent_change_1h})

			// console.log(data[i].data[currency])
		}
		
		console.table(table)
		console.table(sigTable)

		let sigAnalytics = await testSig(mySig['percent_change_1h'])
		if(sigAnalytics!==null)
			await slack.sendMsg("1h percent" + sigAnalytics)

		return table

	}
}

async function testSig(sig){
	let size = (sig.length -1)

	if(sig[size]=='rising'){
		if(sig[size-1] == 'falling'){
			return "inversion to falling"
		}else {
			return null
		}
	} else{
		if(sig[size-1] == 'rising'){
			return "inversion to rising"
		} else{
			return null
		}
	}
}

