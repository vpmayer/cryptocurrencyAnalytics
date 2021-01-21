const app = require('./app')

var data = [];

async function server(){
	await app();



	// console.log("BTC Analytcs");
	// if(data[0]?.data){
	// 	console.log(data[0].data['BTC'].quote)
	// 	console.log(data[1].data['BTC'].quote)
	// 	console.log(data[2].data['BTC'].quote)
	// }else{
	// 	console.log(data[2])
	// }
	// // console.log("Data 1");
	// // console.log(data[1])
	// // console.log("Data 2");
	// // console.log(data[2])
}

server();
//					min*seg*ms
setInterval(server,5*60*1000);