var models = (function(){

    const feeds = [
        {   url: 'http://www.sunstar.com.ph/rss/cebu'   },
        {   url: 'http://cebudailynews.inquirer.net/feed'   },
        {   url: 'http://www.philstar.com/rss/cebu-news'    }
    ];

    const twitterConfig = {
        "consumerKey": "BZhVyAJwibXroymBCW2eCcHgE",
        "consumerSecret": "SybIpu7hoDkXAfi4DEbD09kaQcO2tLo8AHjeOoy33xyGIH300v",
        "accessToken": "926296647252037632-wXHwIb6iT0EKrtlKlPTEnnfORW1o0S3",
        "accessTokenSecret": "74KuzuoitkeFst2qHzslZtNqRt8wKgDeMJv1qXo3blqxo",
        "callBackUrl": ""
    };

    const firebaseUrl = 'https://pinggu-manjuu.firebaseio.com/news/';

    return {
        feeds: feeds,
        twitterConfig: twitterConfig,
        firebaseUrl: firebaseUrl
    }
})();

module.exports = models;