var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TicketSchema = new Schema({

    id: {
        type: String, 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    projectId: {
        type: Number,
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    assignees: {
        type: Array,
        required: false
    },
    assigned: {
        type: Date,
        required: false
    },
    due: {
        type: Date,
        required: false
    },
    stage: {
        type: Number,
        required: true
    },
    open: {
        type: Boolean,
        required: true
    },
    comments: {
        type: String,
        required: false
    },
        
});

const Ticket = module.exports = mongoose.model('Ticket', TicketSchema); 
