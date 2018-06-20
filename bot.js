var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var botRegexE = /\b\S{4,}er\b/;
  var botRegexO = /\b\S{4,}or\b/;
  if(request.name != "W U O l l O N") {
  
  if(request.text && botRegexE.test(request.text)) {
    this.res.writeHead(200);
    postMessage(request.text, "er");
    this.res.end();
  }
  if(request.text && botRegexO.test(request.text)) {
    this.res.writeHead(200);
    postMessage(request.text, "or");
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

function postMessage(variable, ending) {
  var botResponse, options, body, botReq;
  
var m,n,o;	
	
    var n = variable.indexOf("er ");
    if (variable.indexOf(" ", n) == -1) {
    m = variable.length;
    }
    else {
    var m = variable.indexOf(" ", n);
    }
    if (variable.lastIndexOf(" ", n) == -1) {
    o = 0;
    }
    else {
    var o = variable.lastIndexOf(" ", n);
    }
    var wordlength = m-o;
	var wordlength2 = wordlength-2;
    var substring = variable.substr(o,wordlength2);
    if (ending == "er")
    {
    	var finalstring = substring.concat("er? I barely know her!")
    }
    else if (ending == "or")
    {
    	var finalstring = substring.concat("or? I barely know her!")
    }
    
	
        botResponse = finalstring;


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
