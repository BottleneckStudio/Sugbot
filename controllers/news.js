var Twitter = require('twitter-node-client').Twitter;
var request = require('request');
var variables = require('../models');
var RssFeedEmitter = require('rss-feed-emitter');

var twitter = new Twitter(variables.twitterConfig);

var feeder = InitializeFeeder(new RssFeedEmitter(), variables.feeds);
feeder.on('new-item', function (item) {
    // console.log(item.meta.title);
    console.log('=================================================');
    console.log(new Date(Date.now()));
    console.log(item.title);
    console.log(item.description);
    console.log(item.link);
    let name = item.link.split('/').slice(-1)[0];
    console.log(name);
    checkIfExist(name, item, item.meta.title.replace(/[\. ,:-]+/g, ''));
});

function InitializeFeeder(feeder, feeds) {
    for (var i = 0; i < feeds.length; i++) {
        feeder.add(variables.feeds[i]);
    }
    return feeder;
}

function checkIfExist(name, item, newspaper) {
    var options = {
        method: 'GET',
        uri: variables.firebaseUrl + newspaper + '/' + name + '.json'
    };

    request(options, function (error, response, body) {
        // console.log(body);
        if (JSON.parse(body) == null) {
            // Send Tweet if not found in Firebase    
            sendTweet(name, item, newspaper);
        }
    });
}

function sendTweet(name, item, newspaper) {
    twitter.postTweet({
            status: item.link
        },
        function () {

        },
        function () {
            console.log("Success!");
            // Insert to Firebase if successful
            sendPutRequest(name, item, newspaper);
        });
}


function sendPutRequest(name, item, newspaper) {
    var obj = {
        description: item.description,
        link: item.link,
        title: item.title
    }
    var options = {
        method: 'PUT',
        url: variables.firebaseUrl + newspaper + '/' + name + '.json',
        json: obj
    };

    request(options, function (error, response, body) {
        // DO SOMETHING
    });
}