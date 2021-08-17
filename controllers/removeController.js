const Schedule = require('../models/Schedule');
const Events = require('../models/Events');
const UserClass = require('../models/UserClass');
const Content = require('../models/Content');
const {deleteUserValidate} = require('./validate');

const removeController = {

    removeSchedule: async function (req, res){

        const {error} = deleteUserValidate(req.body)
        if(error) return res.status(400).send(error.message);

        const deletedTask = await Schedule.deleteOne({_id: req.body._id})
        if(!deletedTask) return res.status(400).send('task not found');

        res.send(deletedTask);

    },

    removeEvents: async function (req, res){

        const {error} = deleteUserValidate(req.body)
        if(error) return res.status(400).send(error.message);

        const deletedTask = await Events.deleteOne({_id: req.body._id})
        if(!deletedTask) return res.status(400).send('task not found');

        res.send(deletedTask);

    },

    removeUserClass: async function (req, res){

        const {error} = deleteUserValidate(req.body)
        if(error) return res.status(400).send(error.message);

        const deletedUserClass = await UserClass.deleteOne({_id: req.body._id})
        if(!deletedUserClass) return res.status(400).send('class not found');

        res.send(deletedUserClass);
    },

    removeContent: async function (req, res){

        const {error} = deleteUserValidate(req.body)
        if(error) return res.status(400).send(error.message);

        const deletedContent = await Content.deleteOne({_id: req.body._id})
        if(!deletedContent) return res.status(400).send('class not found');

        res.send(deletedContent);
    },

}

module.exports = removeController;