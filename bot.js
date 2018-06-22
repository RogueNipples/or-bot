var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var botRegexE = /\b\S{4,}er\b/;
  var botRegexO = /\b\S{4,}or\b/;
var startOfWordIndex, midWordIndex, endOfWordIndex
    if (botRegexO.test(request.text) || botRegexE.test(request.text))
    {
	    if (request.name != "W U O | | O N")
	    {
		{
			midWordIndex = request.text.indexOf("er ");
			if (midWordIndex== -1)
		{
			endOfWordIndex = request.text.length;
		}
		else
		{
			endOfWordIndex = midWordIndex+2;
		}
		if (request.text.lastIndexOf(" ", request.text) == -1)
		{
			startOfWordIndex = 0;
		}
		else
		{
			startOfWordIndex = request.text.lastIndexOf(" ", request.text);
		}
		var wordLength = endOfWordIndex-startOfWordIndex;
		var substring = request.text.substr(startOfWordIndex,wordLength);
		this.res.writeHead(200);
    		postMessage(substring);
    		this.res.end();
		}
	    }
    }
}

//==========================================================================================

function postMessage(substring) {
  var botResponse, options, body, botReq;
	
        botResponse = substring.concat("? I barely know her!");


  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

exports.respond = respond;
