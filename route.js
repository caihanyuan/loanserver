
exports.setRequestUrl=function(app){
    var banner = require('./models/banner');

    app.get('/banner', banner.getBannerData);
}
