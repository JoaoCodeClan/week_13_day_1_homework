const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('client/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(require('./controllers/index.js'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(3000, function () {
  console.log(`Films app listening on port ${ this.address().port }`);
});
