var fs = require('fs');
var path = require('path');

exports.getBannerData = function(req, res) {
    try {
        fs.readFile(path.join(__dirname, './bannerdata.json'), 'utf-8', function(err, data) {
            if (err) {
                res.statusCode = 400;

                console.log('error to read file: bannerdata.json');
                throw err;
            } else {
                res.writeHead(200, {
                    'Content-Length': Buffer.byteLength(data),
                    'Content-Type': 'text/plain;charset=utf-8'
                });
                res.write(data);
                res.end();
            }
        });
    } catch (e) {
        console.error('Error caught by getBannerData:', e);
    }

}