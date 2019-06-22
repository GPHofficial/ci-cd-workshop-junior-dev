const express = require('express');

const feature1 = require('./feature1');

const app = express();

const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
    console.log('Example app listening on port ' + port)
);

app.get('/', (req, res) => {
  res.send(`Hello ${feature1.registerName(req)}`);
});

const stop = () => {
  server.close();
};

module.exports = server;
module.exports.stop = stop;
