var express = require('express');
var app = express();

app.set('port', (parseInt(process.env.PORT, 10) || 5000));

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  return handle(req, res);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


