var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
	if (Math.floor(Math.random()*1.4)){
  var request = JSON.parse(this.req.chunks[0]);
  var botRegexE = /\b\S{4,}er\b/;
  var botRegexO = /\b\S{4,}or\b/;
  var botRegexBus = /\bbusing\b/;
	var substring;
		var botResponse, botResponse2;
    if (botRegexO.test(request.text) || botRegexE.test(request.text))
    {
	if (request.name != "W U O | | O N")
	{
	    if (botRegexE.test(request.text))
	    {
	        substring = request.text.match(/\b\S{4,}er\b/);
	    }
	    else
	    {
	        substring = request.text.match(/\b\S{4,}or\b/);
	    }
		botResponse = substring[0].concat("? I barely know her!");
	    this.res.writeHead(200);
	    postMessage(botResponse);
	    this.res.end();
    	}
    }
	if (botRegexBus.test(request.text))
	{
	    botResponse2 = "bussing*"
	    this.res.writeHead(200);
	    postMessage(botResponse2);
	    this.res.end();
	}
	}
}

//==========================================================================================

function postMessage(string) {
  var botResponse, options, body, botReq;
	
        botResponse = string;


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
