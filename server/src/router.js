const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Ticket = require('./models/ticket');
const errorReporter = require('./errorReporter');
mongoose.connect('mongodb://localhost:27017/ticketingsystem');

router
    .get('/tickets', function(req, res) {

        Ticket.find({}, function(e, data) {

            if (e) {
                return res.send(e, { status: 500 });
            }
            return res.json({ message: data });

        });

    })
    .post('/tickets', function(req, res) {
        var ticket = new Ticket();
        ticket.name = req.body.name;
        ticket.save(function(e) {
            if (e) {
                res.send(`${e.name}.`);
            }
            res.json({message: 'ticket created!'});

        });
    });

module.exports = router;
