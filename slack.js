require('dotenv').config()
const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_TOKEN);

module.exports = {

	 sendMsg: async (msg) =>{
		try {
	    // Use the `chat.postMessage` method to send a message from this app
	    return await web.chat.postMessage({
	      channel: '#crypto',
	      text: msg,
	    });
	  } catch (error) {
	    console.error(error);
	    return error
	  }
	}
};