const testes = require('./analytics/testes')


async function test(){
	console.log(test)
	console.log(await testes.testSig(['falling','falling','falling']))
	console.log(await testes.testSig(['falling','falling','rising']))
	console.log(await testes.testSig(['falling','rising','rising']))

	console.log(await testes.testSig(['rising','rising','rising']))

	console.log(await testes.testSig(['rising','rising','falling']))
	console.log(await testes.testSig(['rising','falling','falling']))
	console.log(await testes.testSig(['falling','falling','falling']))

};

test();