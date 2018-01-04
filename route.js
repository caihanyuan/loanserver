
exports.setRequestUrl=function(app){
    var banner = require('./models/banner');
    var loanstatus = require('./models/loanStatus');

    app.post('/banner', banner.getBannerData);
    app.post('/loanstatus', loanstatus.getRandomStatus);
}
