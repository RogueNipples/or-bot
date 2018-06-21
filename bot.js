var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var botRegexE = /\b\S{4,}er\b/;
  var botRegexO = /\b\S{4,}or\b/;
	
    var midWordIndex = request.text.indexOf("er ");
    if (request.text.indexOf(" ", midWordIndex) == -1)
    {
	var endOfWordIndex = request.text.length;
    }
    else
    {
	var endOfWordIndex = request.text.indexOf(" ", midWordIndex);
    }
    if (request.text.lastIndexOf(" ", midWordIndex) == -1)
    {
	var startOfWordIndex = 0;
    }
    else
    {
	var startOfWordIndex = request.text.lastIndexOf(" ", midWordIndex);
    }
    var wordLength = endOfWordIndex-startOfWordIndex;
    var substring = request.text.substr(startOfWordIndex,wordLength);
	
  if(request.name != "W U O l l O N") {
  
  if(botRegexO.text(request.text) || botRegexE.test(request.text)) {
    this.res.writeHead(200);
    postMessage(substring);
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
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
