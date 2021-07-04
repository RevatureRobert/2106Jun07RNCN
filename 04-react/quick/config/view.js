var path = require('path');

module.exports = (app) => {
    app.set('views', path.join(__dirname,'..', 'views'));
    app.set('view engine', 'ejs');
};