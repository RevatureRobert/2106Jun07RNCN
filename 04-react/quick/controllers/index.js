const fs = require('fs')

exports.getIndex = (req, res, next) => {
    // added to read the index.html file from local server directory and send it to the client
    res.send(fs.readFileSync('public/index.html'));
}