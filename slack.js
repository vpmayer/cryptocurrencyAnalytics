require('dotenv').config()
const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_TOKEN);

module.exports = {

	 sendMsg: async (msg, myChannel='#crypto') =>{
		try {
	    // Use the `chat.postMessage` method to send a message from this app
	    return await web.chat.postMessage({
	      channel: myChannel,
	      text: msg,
	    });
	  } catch (error) {
	    console.error(error);
	    return error
	  }
	}
};