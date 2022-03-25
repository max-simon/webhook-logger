const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const endpoint = process.env.ENDPOINT || '/webhook'

function requestHandler(req, res) {
    console.log(req.method, req.originalUrl);
    console.log(req.headers);
    console.log(req.body);
    res.send({});
}

// health endpoint
app.get('/', (req, res) => {
    res.send('ok');
})

app.get(endpoint, requestHandler);
app.post(endpoint, requestHandler);
app.options(endpoint, requestHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port} for endpoint ${endpoint}`)
})
