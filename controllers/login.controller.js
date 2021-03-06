"use strict"
/* modal History */
var History = require('../models/history');

/* module  check error */
var assert = require('assert');

module.exports.get = function(req, res) {
    res.render('login', { title: 'Login Page' });
};
module.exports.post = async  function(req, res) {

    await History.create({
        timestamp: new Date().toLocaleString('en-US', { timeZone: process.env.TIME_ZONE }),
        email: req.body.email,
        act : 1
    }, function(err, result) {
        if (err) {
            console.error(err);
            throw err;
        }
        console.log(result);
    });

    console.log("login success");
    res.redirect('/user');
    // res.json({'access_token':token});
};
