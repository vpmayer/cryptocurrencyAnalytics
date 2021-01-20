
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
	}
}