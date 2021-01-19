require('dotenv').config()
const axios = require('axios');

const api_key = process.env.CMC_KEY;

const cryptInstace = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency',
  timeout: 1000,
  headers: {
    'X-CMC_PRO_API_KEY': api_key
  },
});

module.exports ={
	listAll: async (convert='BRL')=>{
		try{
			let result = await cryptInstace.get('/listings/latest',{
				params:{
					convert:convert
				}
			})
			return result.data
		}
		catch (e) {
			console.error(e)
			return(e)
		}
	},
	listInfo: async (symbol='BTC,ETH,XRP,BTH,LTC') => {
		try{
			let r = await cryptInstace.get('/info',{
				params:{
						symbol:symbol
					}
				})
			return r.data

		} catch (e) {
			console.error(e)
			return(e)
		}
	},
	quotesLatest: async (symbol='BTC,ETH,XRP,BCH,LTC',convert='BRL') => {
		try{
			let r = await cryptInstace.get('/quotes/latest',{
				params:{
						symbol:symbol,
						convert:convert
					}
				})
			return r.data

		} catch (e) {
			console.error(e)
			return(e)
		}
	}
}