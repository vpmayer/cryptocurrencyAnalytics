
module.exports = {
	testSig: async (sig)=>{
		let size = (sig.length -1)
		// console.log(sig)

		if(sig[size]=='rising'){
			if(sig[size-1] == 'falling'){
				return "inversion to rising"
			}else {
				return null
			}
		} else{
			if(sig[size-1] == 'rising'){
				return "inversion to falling"
			} else{
				return null
			}
		}
	},
	difference: async(boughtVal=1.0,marketVal=1.0) =>{
		let diff = (marketVal - boughtVal);
		let percent = ((100.0*(marketVal/boughtVal)) - 100);
		
		return `
			Difference =	${diff}
			% gain =	${percent}`
	}
}