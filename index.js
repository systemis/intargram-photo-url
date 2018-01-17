const express = require('express');
const morgan  = require('morgan');
const htpp    = require('http');


const app     = express();
const server  = htpp.Server(app);
const port    = process.env.PORT || 3000;

let get = require('./link');

app.get('/image/:id', (req, res) => {
    let id = req.params.id;
    new get().done(id, (error, result) => {
        console.log(error);
        console.log(result);

        res.redirect(result);
    })
})

server.listen(port, () => {
    console.log(`Server's listening on`, port);
})