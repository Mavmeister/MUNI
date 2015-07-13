var app = require('./server-config.js');

var port = process.env.PORT || 8081;

app.listen(port);

console.log(' MUNI Server now listening on port ' + port);
