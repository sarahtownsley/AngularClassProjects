var express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    app = express(),
    config = require('./config'),
    transporter = require('./transporter');

app.listen(8080, function () {
    console.log('Email Server running on port ' + config.port);
});

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.post('/api/message', function (req, res) {
    var email = req.body;
    console.log(email);
    transporter.sendMail(email, function (err, info) {
        if (err) res.status(500).send({message: "It didn't work genius", error: err});
        res.send(info);
    })
})