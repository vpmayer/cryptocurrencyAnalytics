
const app = require('./app')


async function server(){
	await app();
}

server();