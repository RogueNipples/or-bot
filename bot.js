var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var botRegexER1 = /er\s/;
  var botRegexER2 = /er$/;
  var botRegexOR1 = /or\s/;
  var botRegexOR2 = /or$/;
  var x = Math.floor((Math.random() * 7) + 1);
	
  if(request.name != "Bot 8" && x > 6) {
  
  if(request.text && botRegexER1.test(request.text)) {
    this.res.writeHead(200);
    postMessage1(request.text);
    this.res.end();
  }
  else if(request.text && botRegexER2.test(request.text)) {
    this.res.writeHead(200);
    postMessage2(request.text);
    this.res.end();
  }
  else if(request.text && botRegexOR1.test(request.text)) {
    this.res.writeHead(200);
    postMessage3(request.text);
    this.res.end();
  }
  else if(request.text && botRegexOR2.test(request.text)) {
    this.res.writeHead(200);
    postMessage4(request.text);
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

function postMessage1(variable) {
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
    
    var finalstring = substring.concat(" her? I barely know her!")
	
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

//==========================================================================================
function postMessage2(variable) {
  var botResponse, options, body, botReq;
  
var m,n,o;	
	
    var n = variable.lastIndexOf("er");
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
    
    var finalstring = substring.concat(" her? I barely know her!")
	
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

//==========================================================================================

function postMessage3(variable) {
  var botResponse, options, body, botReq;
  
var m,n,o;	
	
    var n = variable.indexOf("or ");
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
    
    var finalstring = substring.concat("or? I barely know her!")
	
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

//==========================================================================================
function postMessage4(variable) {
  var botResponse, options, body, botReq;
  
var m,n,o;	
	
    var n = variable.lastIndexOf("or");
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
    
    var finalstring = substring.concat("or? I barely know her!")
	
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
//==========================================================================================



exports.respond = respond;
