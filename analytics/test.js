const testes = require('./testes');


describe('Test of testes.js', () => {
	test('Text result', async () => {
	  let t1 = await testes.difference(1,1);

	  expect(t1).toBe(`
			Difference =	0
			% gain =	0`);
	});

	test('Num Results', async () => {
		let t2 = await testes.diffNum(1,2);
		// console.log(t2)
		expect(t2.diff).toBe(1)
		expect(t2.percent).toBe(100)
	});
});