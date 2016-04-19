var nodemailer = require('nodemailer'),
    xoauth2 = require('xoauth2'),
    config = require('./config');

module.exports = nodemailer.createTransport(config.smtpConfig);