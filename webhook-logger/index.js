const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;
const endpoint = process.env.ENDPOINT || '/webhook'

app.use(bodyparser.json());

function requestHandler(req, res) {
    console.log(req.method, req.originalUrl);
    console.log(req.headers);
    console.log(req.body);
    res.send({});
}

// health endpoint
app.post('/', (req, res) => {
    req.xhr
    res.send('ok');
})

app.get(endpoint, requestHandler);
app.post(endpoint, requestHandler);
app.options(endpoint, requestHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port} for endpoint ${endpoint}`)
})
