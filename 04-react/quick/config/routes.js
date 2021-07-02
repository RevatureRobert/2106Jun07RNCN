var indexRouter = require('../routes/index');

module.exports = (app) => {
    app.use('/', indexRouter);
    // !-- Do not remove this line --! //
};