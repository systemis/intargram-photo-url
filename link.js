const request  = require('request');
const cheerio  = require('cheerio');
const rootLink = 'https://www.instagram.com/p/';
const star     = '"display_resources": [{"src": "';

module.exports = class GetLink{
    done(id = 'BcyiBFllNRa/?taken-by=systemofpeter', cb){
        var postUrl   = `${rootLink}${id}`
        request(postUrl, (error, response, body) => {
            if(error) return cb(error, null);
            
            let indexStar = body.indexOf(star) + star.length;
            let url       = ''

            var isRun     = true;

            body = body.split('');
            
            do{
                url += body[indexStar];
                indexStar += 1;
                body[indexStar] == '"' ? isRun = false : '';

            }while(isRun)

            cb(null, url);
        })
    }
}